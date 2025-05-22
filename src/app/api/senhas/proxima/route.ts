import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Senha } from '@/lib/types';

// Função para definir a próxima senha a ser chamada com base nas regras de prioridade
async function definirProximaSenha() {
    try {
        // Buscar todas as senhas não atendidas
        const senhasNaoAtendidas = await prisma.senha.findMany({
            where: {
                status: 'NAO_ATENDIDA'
            },
            orderBy: {
                dataCriacao: 'asc'
            }
        });

        if (senhasNaoAtendidas.length === 0) {
            return null;
        }

        // Buscar a última senha chamada
        const ultimaSenhaChamada = await prisma.senha.findFirst({
            where: {
                OR: [
                    { status: 'EM_ATENDIMENTO' },
                    { status: 'ATENDIDA' }
                ]
            },
            orderBy: {
                dataChamada: 'desc'
            }
        });

        let proximaSenha;

        // Se não há senha chamada anteriormente, prioridade para SP, depois SE, depois SG
        if (!ultimaSenhaChamada) {
            proximaSenha = senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SP') ||
                senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SE') ||
                senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SG');
            return proximaSenha || senhasNaoAtendidas[0];
        }

        // Regra de alternância: [SP] -> [SE|SG] -> [SP] -> [SE|SG]
        if (ultimaSenhaChamada.tipo === 'SP') {
            // Depois de SP, procurar por SE, depois SG
            proximaSenha = senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SE') ||
                senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SG') ||
                senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SP');
        } else {
            // Depois de SE ou SG, procurar por SP
            proximaSenha = senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SP') ||
                senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SE') ||
                senhasNaoAtendidas.find((s: Senha) => s.tipo === 'SG');
        }

        return proximaSenha || senhasNaoAtendidas[0];
    } catch (error) {
        console.error('Erro ao definir próxima senha:', error);
        return null;
    }
}

// Endpoint para obter a próxima senha a ser chamada
export async function GET() {
    try {
        // Verificar se está dentro do horário de atendimento (7h às 17h)
        const agora = new Date();
        const hora = agora.getHours();

        if (hora < 7 || hora >= 17) {
            return NextResponse.json(
                { message: 'Fora do horário de atendimento (7h às 17h)' },
                { status: 400 }
            );
        }

        // Obter a próxima senha a ser chamada
        const proximaSenha = await definirProximaSenha();

        if (!proximaSenha) {
            return NextResponse.json(
                { message: 'Não há senhas em espera' },
                { status: 404 }
            );
        }

        return NextResponse.json(proximaSenha);
    } catch (error) {
        console.error('Erro ao buscar próxima senha:', error);
        return NextResponse.json(
            { message: 'Erro ao buscar próxima senha', error: (error as Error).message },
            { status: 500 }
        );
    }
}

// Endpoint para chamar a próxima senha
export async function POST(request: NextRequest) {
    try {
        // Verificar se está dentro do horário de atendimento (7h às 17h)
        const agora = new Date();
        const hora = agora.getHours();

        if (hora < 7 || hora >= 17) {
            return NextResponse.json(
                { message: 'Fora do horário de atendimento (7h às 17h)' },
                { status: 400 }
            );
        }

        // Extrair o guichê da requisição
        const { guiche } = await request.json();

        if (!guiche) {
            return NextResponse.json(
                { message: 'Guichê não especificado' },
                { status: 400 }
            );
        }

        // Verificar se o guichê existe e está disponível
        const guicheInfo = await prisma.guiche.findFirst({
            where: {
                numero: parseInt(guiche.replace(/\D/g, ''), 10)
            }
        });

        if (!guicheInfo) {
            return NextResponse.json(
                { message: 'Guichê não encontrado' },
                { status: 404 }
            );
        }

        if (guicheInfo.status === 'FECHADO') {
            return NextResponse.json(
                { message: 'Guichê fechado' },
                { status: 400 }
            );
        }

        if (guicheInfo.status === 'OCUPADO') {
            return NextResponse.json(
                { message: 'Guichê ocupado' },
                { status: 400 }
            );
        }

        // Obter a próxima senha a ser chamada
        const proximaSenha = await definirProximaSenha();

        if (!proximaSenha) {
            return NextResponse.json(
                { message: 'Não há senhas em espera' },
                { status: 404 }
            );
        }

        // Atualizar a senha
        const senhaAtualizada = await prisma.senha.update({
            where: { id: proximaSenha.id },
            data: {
                status: 'EM_ATENDIMENTO',
                dataChamada: new Date(),
                guiche: guiche
            }
        });

        // Atualizar o guichê
        await prisma.guiche.update({
            where: { id: guicheInfo.id },
            data: {
                status: 'OCUPADO',
                ultimaSenha: proximaSenha.codigo
            }
        });

        // Atualizar o painel
        const painel = await prisma.painel.findFirst();
        if (painel) {
            const ultimasChamadas = JSON.parse(painel.ultimasChamadas || '[]');
            ultimasChamadas.unshift({
                codigo: proximaSenha.codigo,
                guiche: guiche,
                dataChamada: new Date().toISOString(),
                tipo: proximaSenha.tipo
            });

            const novasChamadas = ultimasChamadas.slice(0, 5);

            await prisma.painel.update({
                where: { id: painel.id },
                data: {
                    ultimasChamadas: JSON.stringify(novasChamadas)
                }
            });
        }

        return NextResponse.json(senhaAtualizada);
    } catch (error) {
        console.error('Erro ao chamar próxima senha:', error);
        return NextResponse.json(
            { message: 'Erro ao chamar próxima senha', error: (error as Error).message },
            { status: 500 }
        );
    }
} 