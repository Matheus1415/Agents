# NLW Agents

O NLW Agents é uma aplicação desenvolvida durante um evento da Rocketseat utilizando tecnologias modernas para a criação de uma API robusta, eficiente e escalável. O projeto demonstra boas práticas com validação de schemas, uso de ORM type-safe, modularização e execução containerizada.

## 🚀 Tecnologias

- **Node.js** com `--experimental-strip-types` (TypeScript nativo)

- **Fastify** – Framework web rápido e eficiente

- **PostgreSQL** – Banco de dados relacional com suporte à extensão `pgvector`

- **Drizzle ORM** – ORM type-safe para manipulação segura do banco de dados

- **Zod** – Validação de schemas com tipagem

- **Docker & Docker Compose** – Containerização do ambiente

- **Biome** – Linter moderno e formatação de código

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js
- npm ou yarn
- Ter o Docker instalado

### Instalação

1. Clone o repositório
   ```bash
    git clone https://github.com/Matheus1415/Agents
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as Variáveis de Ambiente `.env`:

   ```env
   # HTTP
   PORT=3333

   # DATABASE
   DATABASE_URL="postgresql://docker:docker@localhost:5433/agents"

   # GEMINI
   GEMINI_API_KEY=""
   ```

4. Depois de configurar o `.env` e verificar o `DATABASE_URL`, execute os seguintes comandos para subir o banco e preparar a aplicação:

   ```bash
      docker compose up -d
      npm run db:generate
      npm run db:migrate
   ```

### Comandos opcionais

5. Para abrir a interface visual do Drizzle ORM e gerenciar o banco:

   ```bash
      npx drizzle-kit studio
   ```

6. Para listar os containers Docker em execução:

   ```bash
      docker ps
   ```

### Scripts Disponíveis

- `npm run start` — Inicia o servidor em modo produção com suporte a TypeScript nativo
- `npm run dev` — Inicia o servidor em modo desenvolvimento com hot reload e TypeScript nativo
- `npm run db:generate` — Gera os arquivos de migração com Drizzle ORM
- `npm run db:migrate` — Executa as migrações no banco de dados
- `npm run db:seed` — (Opcional) Popula o banco de dados com dados de exemplo


> O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
server/
├── src/
│   ├── db/                         # Banco de dados
│   │   ├── migrations/             # Arquivos de migração SQL
│   │   │   └── 0000_real_ben_grimm.sql
│   │   ├── schema/                 # Definições dos schemas do banco com Drizzle ORM
│   │   │   └── audio-chunks.ts
│   │   ├── seed/                   # Scripts para popular o banco de dados
│   │   │   └── seed.ts
│   │   └── connection.ts           # Configuração da conexão com o banco
│   ├── http/
│   │   └── routes/                 # Definição das rotas HTTP
│   │       └── create-question.ts
│   ├── Schema/                     # Configurações de ambiente e variáveis
│   │   └── env.ts
│   └── services/                   # Serviços auxiliares
│       └── gemini.ts               # Serviço Gemini API
```
