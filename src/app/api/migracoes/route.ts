import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST() {
    try {
        // 1. Garantir que todos os guichês estejam com o status DISPONIVEL
        const guiches = await prisma.guiche.findMany();

        for (const guiche of guiches) {
            await prisma.guiche.update({
                where: { id: guiche.id },
                data: {
                    status: 'DISPONIVEL'
                }
            });
        }

        // 2. Atualizar senhas não atendidas para status DESISTENCIA
        await prisma.senha.updateMany({
            where: {
                status: 'NAO_ATENDIDA'
            },
            data: {
                status: 'DESISTENCIA'
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Migração concluída com sucesso'
        });
    } catch (error) {
        console.error('Erro na migração:', error);
        return NextResponse.json(
            {
                error: 'Erro ao realizar migração',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
} 