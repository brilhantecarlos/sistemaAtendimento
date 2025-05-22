/*
  Warnings:

  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comentarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tickets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoSenha" AS ENUM ('SP', 'SG', 'SE');

-- CreateEnum
CREATE TYPE "StatusAtendimento" AS ENUM ('NAO_ATENDIDA', 'EM_ATENDIMENTO', 'ATENDIDA', 'DESISTENCIA');

-- CreateEnum
CREATE TYPE "StatusGuiche" AS ENUM ('DISPONIVEL', 'OCUPADO', 'FECHADO');

-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_atendente_id_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_categoria_id_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_criador_id_fkey";

-- DropTable
DROP TABLE "categorias";

-- DropTable
DROP TABLE "comentarios";

-- DropTable
DROP TABLE "tickets";

-- DropTable
DROP TABLE "usuarios";

-- DropEnum
DROP TYPE "Prioridade";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "StatusTicket";

-- CreateTable
CREATE TABLE "senhas" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "tipo" "TipoSenha" NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_chamada" TIMESTAMP(3),
    "guiche" TEXT,
    "tempo_atendimento" INTEGER,
    "status" "StatusAtendimento" NOT NULL DEFAULT 'NAO_ATENDIDA',

    CONSTRAINT "senhas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guiches" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "status" "StatusGuiche" NOT NULL DEFAULT 'DISPONIVEL',
    "ultima_senha" TEXT,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guiches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "painel" (
    "id" SERIAL NOT NULL,
    "ultimas_chamadas" TEXT NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "painel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estatisticas" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "total_senhas" INTEGER NOT NULL,
    "senhas_atendidas" INTEGER NOT NULL,
    "senhas_sp" INTEGER NOT NULL,
    "senhas_sg" INTEGER NOT NULL,
    "senhas_se" INTEGER NOT NULL,
    "tempo_medio_sp" DOUBLE PRECISION NOT NULL,
    "tempo_medio_sg" DOUBLE PRECISION NOT NULL,
    "tempo_medio_se" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "estatisticas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "senhas_codigo_key" ON "senhas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "guiches_numero_key" ON "guiches"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "estatisticas_data_key" ON "estatisticas"("data");
