import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST() {
    try {
        // 1. Atualizar todas as senhas com status NAO_ATENDIDA e EM_ATENDIMENTO para DESISTENCIA
        await prisma.senha.updateMany({
            where: {
                status: {
                    in: ['NAO_ATENDIDA', 'EM_ATENDIMENTO']
                }
            },
            data: {
                status: 'DESISTENCIA'
            }
        });

        // 2. Liberar todos os guichês ocupados
        await prisma.guiche.updateMany({
            where: {
                status: {
                    in: ['OCUPADO', 'FECHADO']
                }
            },
            data: {
                status: 'DISPONIVEL',
                ultimaSenha: null
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Senhas reiniciadas e guichês liberados com sucesso'
        });
    } catch (error) {
        console.error('Erro ao reiniciar senhas:', error);
        return NextResponse.json(
            {
                error: 'Erro ao reiniciar senhas',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
} 