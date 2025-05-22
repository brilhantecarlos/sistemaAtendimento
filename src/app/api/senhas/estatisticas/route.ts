import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

let ultimaAtualizacaoBD = new Date(0);
const INTERVALO_MINIMO_ATUALIZACAO = 5 * 60 * 1000;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const dataInicio = searchParams.get('dataInicio');
        const dataFim = searchParams.get('dataFim');

        const hoje = new Date();
        const inicioHoje = new Date(hoje.setHours(0, 0, 0, 0));
        const fimHoje = new Date(hoje.setHours(23, 59, 59, 999));

        const dataInicioObj = dataInicio ? new Date(dataInicio) : inicioHoje;
        const dataFimObj = dataFim ? new Date(dataFim) : fimHoje;

        const senhas = await prisma.senha.findMany({
            where: {
                dataCriacao: {
                    gte: dataInicioObj,
                    lte: dataFimObj
                }
            }
        });

        const senhasAny = senhas as any[];
        const totalSenhas = senhasAny.length;
        const senhasAtendidas = senhasAny.filter(s => s.status === 'ATENDIDA').length;
        const senhasEmAtendimento = senhasAny.filter(s => s.status === 'EM_ATENDIMENTO').length;
        const senhasNaoAtendidas = senhasAny.filter(s => s.status === 'NAO_ATENDIDA').length;
        const senhasDesistencia = senhasAny.filter(s => s.status === 'DESISTENCIA').length;

        const senhasSP = senhasAny.filter(s => s.tipo === 'SP').length;
        const senhasSG = senhasAny.filter(s => s.tipo === 'SG').length;
        const senhasSE = senhasAny.filter(s => s.tipo === 'SE').length;

        const senhasAtendidasSP = senhasAny.filter(s => s.tipo === 'SP' && s.status === 'ATENDIDA' && s.tempoAtendimento);
        const senhasAtendidasSG = senhasAny.filter(s => s.tipo === 'SG' && s.status === 'ATENDIDA' && s.tempoAtendimento);
        const senhasAtendidasSE = senhasAny.filter(s => s.tipo === 'SE' && s.status === 'ATENDIDA' && s.tempoAtendimento);

        const tempoMedioSP = senhasAtendidasSP.length > 0
            ? senhasAtendidasSP.reduce((acc, curr) => acc + (curr.tempoAtendimento || 0), 0) / senhasAtendidasSP.length
            : 0;

        const tempoMedioSG = senhasAtendidasSG.length > 0
            ? senhasAtendidasSG.reduce((acc, curr) => acc + (curr.tempoAtendimento || 0), 0) / senhasAtendidasSG.length
            : 0;

        const tempoMedioSE = senhasAtendidasSE.length > 0
            ? senhasAtendidasSE.reduce((acc, curr) => acc + (curr.tempoAtendimento || 0), 0) / senhasAtendidasSE.length
            : 0;

        const senhasAtendidasTotal = senhasAny.filter(s => s.status === 'ATENDIDA' && s.tempoAtendimento);
        const tempoMedioGeral = senhasAtendidasTotal.length > 0
            ? senhasAtendidasTotal.reduce((acc, curr) => acc + (curr.tempoAtendimento || 0), 0) / senhasAtendidasTotal.length
            : 0;

        const estatisticasPorHora = [];
        for (let hora = 7; hora < 17; hora++) {
            const senhasNaHora = senhasAny.filter(s => {
                const horaSenha = new Date(s.dataCriacao).getHours();
                return horaSenha === hora;
            });

            estatisticasPorHora.push({
                hora: `${hora}:00`,
                total: senhasNaHora.length,
                SP: senhasNaHora.filter(s => s.tipo === 'SP').length,
                SG: senhasNaHora.filter(s => s.tipo === 'SG').length,
                SE: senhasNaHora.filter(s => s.tipo === 'SE').length
            });
        }

        // Tempo médio de espera (entre criação e chamada)
        const senhasComTempoDeChamada = senhasAny.filter(s =>
            s.dataChamada && (s.status === 'EM_ATENDIMENTO' || s.status === 'ATENDIDA')
        );

        const tempoMedioEspera = senhasComTempoDeChamada.length > 0
            ? senhasComTempoDeChamada.reduce((acc, curr) => {
                const tempoEspera = curr.dataChamada
                    ? (new Date(curr.dataChamada).getTime() - new Date(curr.dataCriacao).getTime()) / 1000
                    : 0;
                return acc + tempoEspera;
            }, 0) / senhasComTempoDeChamada.length
            : 0;

        // Estruturar os dados para retorno
        const estatisticas = {
            periodo: {
                inicio: dataInicioObj,
                fim: dataFimObj
            },
            totais: {
                totalSenhas,
                senhasAtendidas,
                senhasEmAtendimento,
                senhasNaoAtendidas,
                senhasDesistencia,
                senhasSP,
                senhasSG,
                senhasSE
            },
            tempoMedio: {
                geral: Math.round(tempoMedioGeral),
                SP: Math.round(tempoMedioSP),
                SG: Math.round(tempoMedioSG),
                SE: Math.round(tempoMedioSE),
                espera: Math.round(tempoMedioEspera)
            },
            porHora: estatisticasPorHora
        };

        // Verificar se já passou tempo suficiente desde a última atualização no banco
        const agora = new Date();
        if (agora.getTime() - ultimaAtualizacaoBD.getTime() >= INTERVALO_MINIMO_ATUALIZACAO) {
            // Salvar estatísticas na tabela Estatistica
            const dataFormatada = new Date().toISOString().split('T')[0];
            await prisma.estatistica.upsert({
                where: {
                    data: new Date(dataFormatada)
                },
                create: {
                    data: new Date(dataFormatada),
                    totalSenhas,
                    senhasAtendidas,
                    senhasSP,
                    senhasSG,
                    senhasSE,
                    tempoMedioSP: Math.round(tempoMedioSP),
                    tempoMedioSG: Math.round(tempoMedioSG),
                    tempoMedioSE: Math.round(tempoMedioSE)
                },
                update: {
                    totalSenhas,
                    senhasAtendidas,
                    senhasSP,
                    senhasSG,
                    senhasSE,
                    tempoMedioSP: Math.round(tempoMedioSP),
                    tempoMedioSG: Math.round(tempoMedioSG),
                    tempoMedioSE: Math.round(tempoMedioSE)
                }
            });

            ultimaAtualizacaoBD = agora;
        }

        return NextResponse.json(estatisticas);
    } catch (error) {
        console.error('Erro ao calcular estatísticas:', error);
        return NextResponse.json(
            { message: 'Erro ao calcular estatísticas', error: (error as Error).message },
            { status: 500 }
        );
    }
} 