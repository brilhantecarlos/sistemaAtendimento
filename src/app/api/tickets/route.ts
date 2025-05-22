import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { AppError, handleError } from '@/lib/errors';
import { createTicketSchema } from '@/lib/validations';

// GET /api/tickets - Listar todos os tickets
export async function GET(request: NextRequest) {
    try {
        // Parâmetros de consulta
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const prioridade = searchParams.get('prioridade');
        const categoriaId = searchParams.get('categoriaId');

        // Construir where baseado nos filtros
        const where: Record<string, unknown> = {};

        // Filtrar por status se fornecido
        if (status) {
            where.status = status;
        }

        // Filtrar por prioridade se fornecido
        if (prioridade) {
            where.prioridade = prioridade;
        }

        // Filtrar por categoria se fornecido
        if (categoriaId) {
            where.categoriaId = parseInt(categoriaId);
        }

        // Buscar tickets
        const tickets = await prisma.ticket.findMany({
            where,
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
            orderBy: {
                dataCriacao: 'desc',
            },
        });

        return NextResponse.json(tickets);
    } catch (error) {
        return handleError(error);
    }
}

// POST /api/tickets - Criar um novo ticket
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = createTicketSchema.parse(body);

        // Verificar se a categoria existe
        const categoriaExists = await prisma.categoria.findUnique({
            where: { id: validatedData.categoriaId },
        });

        if (!categoriaExists) {
            throw new AppError('Categoria não encontrada', 404);
        }

        // Usar um ID fixo para o criador já que não temos autenticação
        const criadorId = 1; // Usando um ID padrão

        // Criar o ticket
        const ticket = await prisma.ticket.create({
            data: {
                titulo: validatedData.titulo,
                descricao: validatedData.descricao,
                prioridade: validatedData.prioridade || 'MEDIA',
                criadorId: criadorId,
                categoriaId: validatedData.categoriaId,
            },
            include: {
                criador: {
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

        return NextResponse.json(ticket, { status: 201 });
    } catch (error) {
        return handleError(error);
    }
} 