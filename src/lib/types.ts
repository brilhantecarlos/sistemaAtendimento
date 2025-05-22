/**
 * Definição dos tipos e enums usados na aplicação
 */

// Enum para status do guichê
export enum StatusGuiche {
    DISPONIVEL = 'DISPONIVEL',
    OCUPADO = 'OCUPADO',
    FECHADO = 'FECHADO'
}

// Enum para status da senha (StatusAtendimento no schema)
export enum StatusAtendimento {
    NAO_ATENDIDA = 'NAO_ATENDIDA',
    EM_ATENDIMENTO = 'EM_ATENDIMENTO',
    ATENDIDA = 'ATENDIDA',
    DESISTENCIA = 'DESISTENCIA'
}

// Tipo para guichê
export type Guiche = {
    id: number;
    numero: number;
    status: StatusGuiche;
    ultimaSenha?: string | null;
    dataAtualizacao: Date;
}

// Tipo para senha
export type Senha = {
    id: number;
    codigo: string;
    tipo: string;
    status: StatusAtendimento;
    guiche?: string | null;
    dataCriacao: Date;
    dataChamada?: Date | null;
    tempoAtendimento?: number | null;
} 