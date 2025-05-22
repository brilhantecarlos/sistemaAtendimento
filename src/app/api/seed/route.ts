import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST() {
    try {
        // Limpar tabelas existentes
        await prisma.senha.deleteMany({});
        await prisma.guiche.deleteMany({});
        await prisma.painel.deleteMany({});
        await prisma.estatistica.deleteMany({});

        // Criar guichês
        await prisma.guiche.createMany({
            data: [
                { numero: 1, status: 'DISPONIVEL' },
                { numero: 2, status: 'DISPONIVEL' },
                { numero: 3, status: 'DISPONIVEL' },
                { numero: 4, status: 'DISPONIVEL' }
            ]
        });

        // Criar painel
        await prisma.painel.create({
            data: {
                ultimasChamadas: JSON.stringify([]),
            }
        });

        // Criar estatísticas para hoje
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        await prisma.estatistica.create({
            data: {
                data: hoje,
                totalSenhas: 0,
                senhasAtendidas: 0,
                senhasSP: 0,
                senhasSG: 0,
                senhasSE: 0,
                tempoMedioSP: 0,
                tempoMedioSG: 0,
                tempoMedioSE: 0
            }
        });

        // Criar algumas senhas
        await prisma.senha.create({
            data: {
                codigo: '240423-SP01',
                tipo: 'SP',
                status: 'NAO_ATENDIDA'
            }
        });

        await prisma.senha.create({
            data: {
                codigo: '240423-SG01',
                tipo: 'SG',
                status: 'NAO_ATENDIDA'
            }
        });

        await prisma.senha.create({
            data: {
                codigo: '240423-SE01',
                tipo: 'SE',
                status: 'NAO_ATENDIDA'
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Dados de exemplo criados com sucesso'
        });
    } catch (error) {
        console.error('Erro ao criar dados de exemplo:', error);
        return NextResponse.json(
            {
                error: 'Erro ao criar dados de exemplo',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
} 