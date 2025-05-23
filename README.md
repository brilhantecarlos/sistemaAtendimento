# Sistema de Controle de Atendimento

Projeto desenvolvido para a disciplina de **Desenvolvimento Mobile de Alta Performance**, ministrada pelo Prof. João Ferreira, no curso de **Análise e Desenvolvimento de Sistemas** - 4º Período - UNINASSAU.

## Descrição

Este sistema é uma solução web para controle de atendimento em filas de clínicas e consultórios médicos. O foco é otimizar o fluxo de senhas com diferentes níveis de prioridade, proporcionando uma experiência organizada, eficiente e rastreável para clientes e atendentes.

## Quem são os agentes do Sistema?

- **AS - Agente Sistema:** Responsável por emitir senhas e responder aos comandos da atendente.
- **AA - Agente Atendente:** Chama a próxima senha da fila e registra o atendimento.
- **AC - Agente Cliente:** Retira a senha em um totemcom o Agente Sistema e aguarda o atendimento no painel.

## Tipos de Senhas

- **SP:** Senha Prioritária Indicada Idosos, Pessoas com Necessidades Especiais e Pessoas com Deficiência
- **SG:** Senha Geral - Atendimento ao público em geral
- **SE:** Senha para retirada de Exames - Senha para aqueles que somente vieram buscar o seu eaame.

### Tempos Médios de Atendimento (TM)

| Tipo | TM Padrão | Observações |
|------|-----------|-------------|
| SP   | 15 min    | Pode variar ±5 min |
| SG   | 5 min     | Pode variar ±3 min |
| SE   | <1 min    | 95% dos casos até 1 min, 5% até 5 min |

### Regras de Atendimento

A ordem de atendimento deve alternar entre uma senha **SP** e uma senha **SG ou SE**, conforme disponível.

## Funcionalidades

- Emissão de senhas com padrão `YYMMDD-PPSQ`
- Painel com as 5 últimas senhas chamadas
- Regras de alternância entre tipos de senhas
- Registro de atendimento por guichê
- Descarte de senhas não atendidas após o expediente
- Geração de relatórios diários e mensais com:
  - Quantitativos por tipo e atendimento
  - Relatório detalhado das senhas
  - Relatório do Tempo Médio de Atendimento (TM)

## 🕘 Horário de Funcionamento

- Início do expediente: **07:00**
- Encerramento: **17:00**
- Senhas não atendidas após esse horário são descartadas.

## Tecnologias Utilizadas

- **Frontend:**
  - [React.js](https://reactjs.org/)
  - [Next.js](https://nextjs.org/) (para SSR e rotas simplificadas)
  - [TypeScript](https://www.typescriptlang.org/) (tipagem estática)
  - HTML5, CSS3

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - API RESTful

- **Banco de Dados:**
  - Postgresql



## Configuração do Ambiente
### Requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone <URL do repositório>
   cd js-e-ts
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias.

## 4. Uso do Projeto
Para iniciar a aplicação, execute:
```bash
npm run dev
# ou
yarn dev
```
A aplicação estará disponível em `http://localhost:3000`.

## 5. APIs
### Rota: `/api/senhas`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de senhas.
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "senha": "12345"
    }
  ]
  ```

### Rota: `/api/senhas/:id`
- **Método**: `GET`
- **Descrição**: Retorna uma senha específica pelo ID.
- **Parâmetros**:
  - `id`: ID da senha.
- **Resposta**:
  ```json
  {
    "id": 1,
    "senha": "12345"
  }
  ```

## 6. Tipos e Interfaces
O projeto utiliza TypeScript para definir tipos e interfaces. Exemplos incluem:

```typescript
interface Senha {
  id: number;
  senha: string;
}
```

## 7. Licença
Este projeto está licenciado sob a Creative Commons.

## 8. Referências
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)

## Mentes envolvidas no projeto, responsáveis pela criação e prototipação do código.
 ### São eles :
- Carlos João dos Santos Filho - Matrícula 01648355
- Liliane Barbosa Alencar - Matrícula 01650270
