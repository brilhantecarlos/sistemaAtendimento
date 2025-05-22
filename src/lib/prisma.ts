import { PrismaClient } from '../generated/prisma';

// Evitar múltiplas instâncias do Prisma Client em desenvolvimento
// quando o módulo é recarregado devido a Hot Reloading
declare global {
    var prisma: PrismaClient | undefined;
}

// Usar variável global para desenvolvimento e instância única para produção
let prisma: PrismaClient;

if (!global.prisma) {
    global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default prisma; 