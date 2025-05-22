import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Endpoint GET para obter dados do painel
export async function GET() {
    try {
        // Buscar o painel
        let painel = await prisma.painel.findFirst();

        // Se não existir, criar um registro inicial
        if (!painel) {
            painel = await prisma.painel.create({
                data: {
                    ultimasChamadas: '[]',
                    dataAtualizacao: new Date()
                }
            });
        }

        return NextResponse.json(painel);
    } catch (error) {
        console.error('Erro ao buscar dados do painel:', error);
        return NextResponse.json(
            { message: 'Erro ao buscar dados do painel', error: (error as Error).message },
            { status: 500 }
        );
    }
}

// Endpoint POST para atualizar dados do painel
export async function POST(request: NextRequest) {
    try {
        // Extrair dados
        const body = await request.json();
        const { ultimasChamadas } = body;

        if (!ultimasChamadas) {
            return NextResponse.json(
                { message: 'Campo ultimasChamadas é obrigatório' },
                { status: 400 }
            );
        }

        // Validar se ultimasChamadas é um array válido
        try {
            const chamadas = JSON.parse(ultimasChamadas);
            if (!Array.isArray(chamadas)) {
                throw new Error('ultimasChamadas deve ser um array JSON válido');
            }
        } catch (error) {
            return NextResponse.json(
                { message: 'ultimasChamadas deve ser um array JSON válido', error: (error as Error).message },
                { status: 400 }
            );
        }

        // Buscar o painel
        let painel = await prisma.painel.findFirst();

        // Se não existir, criar um novo
        if (!painel) {
            painel = await prisma.painel.create({
                data: {
                    ultimasChamadas,
                    dataAtualizacao: new Date()
                }
            });
        } else {
            // Atualizar o existente
            painel = await prisma.painel.update({
                where: { id: painel.id },
                data: {
                    ultimasChamadas,
                    dataAtualizacao: new Date()
                }
            });
        }

        return NextResponse.json(painel);
    } catch (error) {
        console.error('Erro ao atualizar dados do painel:', error);
        return NextResponse.json(
            { message: 'Erro ao atualizar dados do painel', error: (error as Error).message },
            { status: 500 }
        );
    }
} 