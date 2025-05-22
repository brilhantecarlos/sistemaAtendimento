import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

export function handleError(error: unknown) {
    console.error(error);

    if (error instanceof AppError) {
        return NextResponse.json(
            { error: error.message },
            { status: error.statusCode }
        );
    }

    if (error instanceof ZodError) {
        return NextResponse.json(
            { error: 'Dados inválidos', details: error.format() },
            { status: 400 }
        );
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
            return NextResponse.json(
                { error: 'Registro já existe com este valor único' },
                { status: 409 }
            );
        }

        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'Registro não encontrado' },
                { status: 404 }
            );
        }
    }

    return NextResponse.json(
        { error: 'Erro interno do servidor' },
        { status: 500 }
    );
} 