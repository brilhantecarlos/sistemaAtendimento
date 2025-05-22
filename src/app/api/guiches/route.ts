import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Definição local dos enums
const StatusGuiche = {
  DISPONIVEL: 'DISPONIVEL',
  OCUPADO: 'OCUPADO',
  FECHADO: 'FECHADO'
} as const;

// Schema de validação para criar guichê
const criarGuicheSchema = z.object({
  numero: z.number().int().min(1).max(99),
  status: z.enum(['DISPONIVEL', 'OCUPADO', 'FECHADO']).optional()
});

// GET /api/guiches - Listar todos os guichês
export async function GET() {
  try {
    const guiches = await prisma.guiche.findMany({
      orderBy: {
        numero: 'asc',
      },
    });

    return NextResponse.json(guiches);
  } catch (error) {
    console.error('Erro ao buscar guichês:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar guichês' },
      { status: 500 }
    );
  }
}

// POST /api/guiches - Criar um novo guichê
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validacao = criarGuicheSchema.safeParse(body);

    if (!validacao.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: validacao.error.format() },
        { status: 400 }
      );
    }

    const { numero, status = StatusGuiche.DISPONIVEL } = validacao.data;

    // Verificar se já existe um guichê com o mesmo número
    const guicheExistente = await prisma.guiche.findFirst({
      where: { numero: Number(numero) },
    });

    if (guicheExistente) {
      return NextResponse.json(
        { error: 'Já existe um guichê com este número' },
        { status: 400 }
      );
    }

    // Criar o guichê
    const novoGuiche = await prisma.guiche.create({
      data: {
        numero: Number(numero),
        status
      }
    });

    return NextResponse.json(novoGuiche, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar guichê:', error);
    return NextResponse.json(
      { error: 'Erro ao criar guichê' },
      { status: 500 }
    );
  }
} 