import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Schema de validação para atualização de senha
const atualizarSenhaSchema = z.object({
    status: z.enum(['NAO_ATENDIDA', 'EM_ATENDIMENTO', 'ATENDIDA', 'DESISTENCIA']).optional(),
    guiche: z.string().optional(),
    dataChamada: z.string().optional().transform(val => val ? new Date(val) : undefined),
    tempoAtendimento: z.number().optional()
});

// Tipo para os dados de atualização da senha
type SenhaUpdateData = {
    status?: string;
    guiche?: string;
    dataChamada?: Date;
    tempoAtendimento?: number;
};

// Obter senha pelo ID
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const senha = await prisma.senha.findUnique({
            where: { codigo: params.id }
        });

        if (!senha) {
            return NextResponse.json(
                { message: 'Senha não encontrada' },
                { status: 404 }
            );
        }

        return NextResponse.json(senha);
    } catch (error) {
        console.error('Erro ao buscar senha:', error);
        return NextResponse.json(
            { message: 'Erro ao buscar senha', error: (error as Error).message },
            { status: 500 }
        );
    }
}

// Atualizar senha pelo ID
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Verificar se a senha existe
        const senhaExistente = await prisma.senha.findUnique({
            where: { codigo: params.id }
        });

        if (!senhaExistente) {
            return NextResponse.json(
                { message: 'Senha não encontrada' },
                { status: 404 }
            );
        }

        // Extrair e validar dados
        const body = await request.json();
        const validacao = atualizarSenhaSchema.safeParse(body);

        if (!validacao.success) {
            return NextResponse.json(
                { message: 'Dados inválidos', errors: validacao.error.format() },
                { status: 400 }
            );
        }

        const { status, guiche, dataChamada, tempoAtendimento } = validacao.data;

        // Preparar dados para atualização
        const dadosAtualizacao: SenhaUpdateData = {};

        if (status) {
            dadosAtualizacao.status = status;
        }

        if (guiche) {
            dadosAtualizacao.guiche = guiche;
        }

        if (dataChamada) {
            dadosAtualizacao.dataChamada = dataChamada;
        }

        if (tempoAtendimento !== undefined) {
            dadosAtualizacao.tempoAtendimento = tempoAtendimento;
        }

        // Atualizar guichê se necessário
        if (status === 'EM_ATENDIMENTO' && guiche) {
            // Atualizar status do guichê
            await prisma.guiche.update({
                where: {
                    numero: parseInt(guiche.replace(/\D/g, ''), 10)
                },
                data: {
                    status: 'OCUPADO',
                    ultimaSenha: params.id
                }
            });
        } else if (status === 'ATENDIDA' && senhaExistente.guiche) {
            // Liberar o guichê
            await prisma.guiche.update({
                where: {
                    numero: parseInt(senhaExistente.guiche.replace(/\D/g, ''), 10)
                },
                data: {
                    status: 'DISPONIVEL'
                }
            });
        }

        // Atualizar a senha
        const senhaAtualizada = await prisma.senha.update({
            where: { codigo: params.id },
            data: dadosAtualizacao
        });

        // Atualizar painel se senha for chamada
        if (status === 'EM_ATENDIMENTO') {
            const painel = await prisma.painel.findFirst();
            if (painel) {
                // Adicionar a senha à lista de últimas chamadas
                const ultimasChamadas = JSON.parse(painel.ultimasChamadas || '[]');
                ultimasChamadas.unshift({
                    codigo: params.id,
                    guiche: guiche || senhaExistente.guiche,
                    dataChamada: new Date().toISOString()
                });

                // Manter apenas as últimas 5 chamadas
                const novasChamadas = ultimasChamadas.slice(0, 5);

                await prisma.painel.update({
                    where: { id: painel.id },
                    data: {
                        ultimasChamadas: JSON.stringify(novasChamadas)
                    }
                });
            }
        }

        return NextResponse.json(senhaAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar senha:', error);
        return NextResponse.json(
            { message: 'Erro ao atualizar senha', error: (error as Error).message },
            { status: 500 }
        );
    }
}

// Excluir senha pelo ID
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Verificar se a senha existe
        const senhaExistente = await prisma.senha.findUnique({
            where: { codigo: params.id }
        });

        if (!senhaExistente) {
            return NextResponse.json(
                { message: 'Senha não encontrada' },
                { status: 404 }
            );
        }

        // Excluir a senha
        await prisma.senha.delete({
            where: { codigo: params.id }
        });

        return NextResponse.json({ message: 'Senha excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir senha:', error);
        return NextResponse.json(
            { message: 'Erro ao excluir senha', error: (error as Error).message },
            { status: 500 }
        );
    }
} 