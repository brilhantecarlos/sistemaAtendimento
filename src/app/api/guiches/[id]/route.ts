import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { StatusGuiche } from "@/lib/types";

// Schema de validação para atualizar guichê
const atualizarGuicheSchema = z.object({
    status: z.nativeEnum(StatusGuiche).optional(),
    ultimaSenha: z.string().nullable().optional(),
});

// Endpoint GET para buscar guichê por ID
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id, 10);

        if (isNaN(id)) {
            return NextResponse.json(
                { message: 'ID inválido' },
                { status: 400 }
            );
        }

        const guiche = await prisma.guiche.findFirst({
            where: {
                OR: [
                    { id },
                    { numero: id }
                ]
            }
        });

        if (!guiche) {
            return NextResponse.json(
                { message: 'Guichê não encontrado' },
                { status: 404 }
            );
        }

        return NextResponse.json(guiche);
    } catch (error) {
        console.error('Erro ao buscar guichê:', error);
        return NextResponse.json(
            { message: 'Erro ao buscar guichê', error: (error as Error).message },
            { status: 500 }
        );
    }
}

// Endpoint PATCH para atualizar guichê
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id, 10);

        if (isNaN(id)) {
            return NextResponse.json(
                { message: 'ID inválido' },
                { status: 400 }
            );
        }

        // Verificar se o guichê existe
        const guicheExistente = await prisma.guiche.findFirst({
            where: {
                OR: [
                    { id },
                    { numero: id }
                ]
            }
        });

        if (!guicheExistente) {
            return NextResponse.json(
                { message: 'Guichê não encontrado' },
                { status: 404 }
            );
        }

        // Extrair e validar dados
        const body = await request.json();
        const validacao = atualizarGuicheSchema.safeParse(body);

        if (!validacao.success) {
            return NextResponse.json(
                { message: 'Dados inválidos', errors: validacao.error.format() },
                { status: 400 }
            );
        }

        const { status, ultimaSenha } = validacao.data;

        // Preparar dados para atualização
        const dadosAtualizacao: Partial<{
            status: StatusGuiche;
            ultimaSenha: string | null;
        }> = {};

        if (status) {
            dadosAtualizacao.status = status;
        }

        if (ultimaSenha !== undefined) {
            dadosAtualizacao.ultimaSenha = ultimaSenha;
        }

        // Atualizar guichê
        const guicheAtualizado = await prisma.guiche.update({
            where: { id: guicheExistente.id },
            data: dadosAtualizacao
        });

        return NextResponse.json(guicheAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar guichê:', error);
        return NextResponse.json(
            { message: 'Erro ao atualizar guichê', error: (error as Error).message },
            { status: 500 }
        );
    }
}

// Endpoint DELETE para remover guichê
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id, 10);

        if (isNaN(id)) {
            return NextResponse.json(
                { message: 'ID inválido' },
                { status: 400 }
            );
        }

        // Verificar se o guichê existe
        const guicheExistente = await prisma.guiche.findFirst({
            where: {
                OR: [
                    { id },
                    { numero: id }
                ]
            }
        });

        if (!guicheExistente) {
            return NextResponse.json(
                { message: 'Guichê não encontrado' },
                { status: 404 }
            );
        }

        // Verificar se há senhas sendo atendidas neste guichê
        const senhasEmAtendimento = await prisma.senha.findFirst({
            where: {
                status: 'EM_ATENDIMENTO',
                guiche: `Guichê ${guicheExistente.numero}`
            }
        });

        if (senhasEmAtendimento) {
            return NextResponse.json(
                { message: 'Não é possível remover um guichê que está atendendo senhas' },
                { status: 400 }
            );
        }

        // Remover guichê
        await prisma.guiche.delete({
            where: { id: guicheExistente.id }
        });

        return NextResponse.json({ message: 'Guichê removido com sucesso' });
    } catch (error) {
        console.error('Erro ao remover guichê:', error);
        return NextResponse.json(
            { message: 'Erro ao remover guichê', error: (error as Error).message },
            { status: 500 }
        );
    }
} 