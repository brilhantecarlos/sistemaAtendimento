import { z } from 'zod';

// Definir enums que precisamos usar
export const Role = {
    ADMIN: 'ADMIN',
    GERENTE: 'GERENTE',
    ATENDENTE: 'ATENDENTE',
    CLIENTE: 'CLIENTE'
} as const;

export const Prioridade = {
    BAIXA: 'BAIXA',
    MEDIA: 'MEDIA',
    ALTA: 'ALTA',
    CRITICA: 'CRITICA'
} as const;

export const StatusTicket = {
    ABERTO: 'ABERTO',
    EM_ATENDIMENTO: 'EM_ATENDIMENTO',
    AGUARDANDO_RESPOSTA: 'AGUARDANDO_RESPOSTA',
    RESOLVIDO: 'RESOLVIDO',
    FECHADO: 'FECHADO'
} as const;

// Validações de ticket
export const createTicketSchema = z.object({
    titulo: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
    descricao: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
    prioridade: z.enum([Prioridade.BAIXA, Prioridade.MEDIA, Prioridade.ALTA, Prioridade.CRITICA]).optional(),
    categoriaId: z.number().int().positive('Categoria inválida'),
});

export const updateTicketSchema = z.object({
    titulo: z.string().min(5, 'Título deve ter pelo menos 5 caracteres').optional(),
    descricao: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres').optional(),
    status: z.enum([StatusTicket.ABERTO, StatusTicket.EM_ATENDIMENTO, StatusTicket.AGUARDANDO_RESPOSTA, StatusTicket.RESOLVIDO, StatusTicket.FECHADO]).optional(),
    prioridade: z.enum([Prioridade.BAIXA, Prioridade.MEDIA, Prioridade.ALTA, Prioridade.CRITICA]).optional(),
    atendenteId: z.number().int().positive('Atendente inválido').nullable().optional(),
    categoriaId: z.number().int().positive('Categoria inválida').optional(),
});

// Validações de categoria
export const createCategoriaSchema = z.object({
    nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    descricao: z.string().optional(),
});

export const updateCategoriaSchema = z.object({
    nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').optional(),
    descricao: z.string().optional(),
});

// Validações de comentário
export const createComentarioSchema = z.object({
    conteudo: z.string().min(3, 'Comentário deve ter pelo menos 3 caracteres'),
    ticketId: z.number().int().positive('Ticket inválido'),
}); 