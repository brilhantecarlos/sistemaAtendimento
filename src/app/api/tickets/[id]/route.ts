import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { AppError, handleError } from '@/lib/errors';
import { updateTicketSchema } from '@/lib/validations';

function unauthorized() {
    return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
    );
}

function forbidden() {
    return NextResponse.json(
        { error: 'Sem permissão' },
        { status: 403 }
    );
}

function isAuthorized(user: { role: string }, roles: string[]) {
    return roles.includes(user.role);
}

async function authenticateRequest() {

    return {
        userId: 1,
        role: 'ADMIN',
        nome: 'Admin'
    };
}

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await authenticateRequest();
        if (!user) return unauthorized();

        const id = parseInt(params.id);
        if (isNaN(id)) {
            throw new AppError('ID de ticket inválido', 400);
        }

        // Buscar o ticket
        const ticket = await prisma.ticket.findUnique({
            where: { id },
            include: {
                criador: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        role: true,
                    },
                },
                atendente: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        role: true,
                    },
                },
                categoria: true,
                comentarios: {
                    include: {
                        usuario: {
                            select: {
                                id: true,
                                nome: true,
                                email: true,
                                role: true,
                            },
                        },
                    },
                    orderBy: {
                        dataCriacao: 'asc',
                    },
                },
            },
        });

        if (!ticket) {
            throw new AppError('Ticket não encontrado', 404);
        }

        // Verificar permissões de acesso
        if (
            user.role === 'CLIENTE' &&
            ticket.criadorId !== user.userId
        ) {
            return forbidden();
        }

        if (
            user.role === 'ATENDENTE' &&
            ticket.atendenteId !== user.userId &&
            ticket.atendenteId !== null
        ) {
            return forbidden();
        }

        return NextResponse.json(ticket);
    } catch (error) {
        return handleError(error);
    }
}

// PUT /api/tickets/[id] - Atualizar um ticket
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await authenticateRequest();
        if (!user) return unauthorized();

        const id = parseInt(params.id);
        if (isNaN(id)) {
            throw new AppError('ID de ticket inválido', 400);
        }

        // Verificar se o ticket existe
        const ticket = await prisma.ticket.findUnique({
            where: { id },
        });

        if (!ticket) {
            throw new AppError('Ticket não encontrado', 404);
        }

        // Verificar permissões
        if (user.role === 'CLIENTE') {
            // Clientes só podem atualizar seus próprios tickets e apenas se estiverem abertos
            if (ticket.criadorId !== user.userId) {
                return forbidden();
            }

            if (ticket.status !== 'ABERTO' && ticket.status !== 'AGUARDANDO_RESPOSTA') {
                throw new AppError('Não é possível atualizar um ticket que não está aberto ou aguardando resposta', 400);
            }
        } else if (user.role === 'ATENDENTE') {
            // Atendentes só podem atualizar tickets atribuídos a eles
            if (ticket.atendenteId !== user.userId && ticket.atendenteId !== null) {
                return forbidden();
            }
        }
        // Admins e gerentes podem atualizar qualquer ticket

        const body = await request.json();
        const validatedData = updateTicketSchema.parse(body);

        // Se a categoria ID for fornecida, verificar se existe
        if (validatedData.categoriaId) {
            const categoriaExists = await prisma.categoria.findUnique({
                where: { id: validatedData.categoriaId },
            });

            if (!categoriaExists) {
                throw new AppError('Categoria não encontrada', 404);
            }
        }

        // Se o atendente ID for fornecido, verificar se existe
        if (validatedData.atendenteId) {
            const atendenteExists = await prisma.usuario.findUnique({
                where: { id: validatedData.atendenteId },
            });

            if (!atendenteExists) {
                throw new AppError('Atendente não encontrado', 404);
            }

            // Verificar se o atendente tem o papel correto
            if (atendenteExists.role !== 'ATENDENTE' && atendenteExists.role !== 'GERENTE') {
                throw new AppError('Usuário não é um atendente válido', 400);
            }
        }

        // Atualizar o ticket
        const updatedTicket = await prisma.ticket.update({
            where: { id },
            data: validatedData,
            include: {
                criador: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        role: true,
                    },
                },
                atendente: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        role: true,
                    },
                },
                categoria: true,
            },
        });

        return NextResponse.json(updatedTicket);
    } catch (error) {
        return handleError(error);
    }
}

// DELETE /api/tickets/[id] - Excluir um ticket
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await authenticateRequest();
        if (!user) return unauthorized();

        // Apenas admins e gerentes podem excluir tickets
        if (!isAuthorized(user, ['ADMIN', 'GERENTE'])) {
            return forbidden();
        }

        const id = parseInt(params.id);
        if (isNaN(id)) {
            throw new AppError('ID de ticket inválido', 400);
        }

        // Verificar se o ticket existe
        const ticket = await prisma.ticket.findUnique({
            where: { id },
        });

        if (!ticket) {
            throw new AppError('Ticket não encontrado', 404);
        }

        // Excluir o ticket - isso também excluirá os comentários devido às relações configuradas
        await prisma.ticket.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Ticket excluído com sucesso' });
    } catch (error) {
        return handleError(error);
    }
} 