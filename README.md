## 📂 Sobre o Projeto
NLW Agents permite criar salas de dúvidas onde os usuários podem fazer perguntas relacionadas ao tema da sala. Além disso, é possível gravar áudios sobre o conteúdo discutido, que são utilizados pela inteligência artificial do Gemini para fornecer respostas precisas e contextualizadas às dúvidas apresentadas.

O projeto NLW Agents foi desenvolvido para fins de estudos e aprendizado sobre agentes inteligentes na web. Para rodá-lo localmente, é necessário ter instalado o Node.js, o gerenciador de pacotes npm e o Docker para a containerização do banco de dados. Além disso, é imprescindível configurar a API do Gemini, que é responsável pela inteligência artificial utilizada no projeto.

#### Links úteis para instalação e configuração:

- [Node.js](https://nodejs.org/)
- [npm (já vem com o Node.js)](https://www.npmjs.com/)
- [Docker](https://www.docker.com/get-started)
- [Documentação da API Gemini](https://docs.gemini.com/) (exemplo — adapte conforme a API usada)


---

## ⚙️ Como Instalar
- [Instação Front-and](https://github.com/Matheus1415/Agents/tree/main/client)
- [Instação Back-and](https://github.com/Matheus1415/Agents/tree/main/server)

 ## 🖼️ Fotos do Projeto
<img width="500" height="500" alt="Captura de tela 2025-07-12 175326" src="https://github.com/user-attachments/assets/8c5c99c3-b3f6-4d13-87b8-c27b8f1fb4ed" />
<img width="500" height="500" alt="Captura de tela 2025-07-12 175320" src="https://github.com/user-attachments/assets/7a834a93-6f79-437b-acef-a6f6c73532e2" />

## 📁 Estrutura do Back-and

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

## 📁 Estrutura do Front-and

```bash
client/
├── src/
│   ├── app.tsx                     # Componente raiz da aplicação
│   ├── lib/                        
│   │   └── dayjs.ts                # Configuração da biblioteca Day.js
│   ├── pages/
│   │   └── create-room.tsx        # Página para criação de uma nova sala
│   ├── components/
│   │   ├── question-form.tsx      # Componente de formulário para perguntas
│   │   └── ui/
│   │       └── badge.tsx          # Componente visual de badge
│   ├── http/
│   │   ├── use-create-question.ts          # Hook para criação de perguntas via API
│   │   └── types/
│   │       └── create-question-request.ts  # Tipagem da requisição de criação de pergunta
```

