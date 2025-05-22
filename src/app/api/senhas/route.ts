import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Definição local dos enums
const StatusAtendimento = {
    NAO_ATENDIDA: 'NAO_ATENDIDA',
    EM_ATENDIMENTO: 'EM_ATENDIMENTO',
    ATENDIDA: 'ATENDIDA',
    DESISTENCIA: 'DESISTENCIA'
} as const;

// Schema de validação para criação de senha
const criarSenhaSchema = z.object({
    tipo: z.enum(['SP', 'SG', 'SE'])
});

// Função para gerar o código da senha
function gerarCodigoSenha(tipoSenha: string): string {
    const now = new Date();
    const ano = now.getFullYear().toString().slice(2);
    const mes = (now.getMonth() + 1).toString().padStart(2, '0');
    const dia = now.getDate().toString().padStart(2, '0');

    return `${ano}${mes}${dia}-${tipoSenha}`;
}

// Função para buscar a última senha do tipo no dia
async function buscarUltimaSenhaDoDia(prefixo: string): Promise<number> {
    const ultimaSenha = await prisma.senha.findFirst({
        where: {
            codigo: {
                startsWith: prefixo
            }
        },
        orderBy: {
            codigo: 'desc'
        }
    });

    if (!ultimaSenha) {
        return 0;
    }

    // Extrair o número de sequência do código (Ex: 240617-SP01 -> 01)
    const sequencia = ultimaSenha.codigo.split('-')[1].slice(2);
    return parseInt(sequencia, 10);
}

// Endpoint GET para listar senhas
export async function GET() {
    try {
        // Buscar todas as senhas
        const senhas = await prisma.senha.findMany({
            orderBy: {
                dataCriacao: 'desc',
            },
        });

        return NextResponse.json(senhas);
    } catch (error) {
        console.error('Erro ao buscar senhas:', error);
        return NextResponse.json(
            { error: 'Erro ao buscar senhas' },
            { status: 500 }
        );
    }
}

// Endpoint POST para criar nova senha
export async function POST(request: NextRequest) {
    try {
        // Verificar se está dentro do horário de atendimento (7h às 17h)
        const agora = new Date();
        const hora = agora.getHours();

        if (hora < 7 || hora >= 17) {
            return NextResponse.json(
                { error: 'Fora do horário de atendimento (7h às 17h)' },
                { status: 400 }
            );
        }

        // Extrair e validar dados
        const body = await request.json();
        const validacao = criarSenhaSchema.safeParse(body);

        if (!validacao.success) {
            return NextResponse.json(
                { error: 'Dados inválidos', details: validacao.error.format() },
                { status: 400 }
            );
        }

        const { tipo } = validacao.data;

        // Gerar código de senha
        const prefixo = gerarCodigoSenha(tipo);
        const ultimaSequencia = await buscarUltimaSenhaDoDia(prefixo);
        const novaSequencia = ultimaSequencia + 1;
        const codigo = `${prefixo}${novaSequencia.toString().padStart(2, '0')}`;

        // Criar a senha no banco de dados
        const novaSenha = await prisma.senha.create({
            data: {
                codigo,
                tipo,
                status: StatusAtendimento.NAO_ATENDIDA
            }
        });

        return NextResponse.json(novaSenha, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar senha:', error);
        return NextResponse.json(
            { error: 'Erro ao criar senha' },
            { status: 500 }
        );
    }
} 