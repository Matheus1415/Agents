## 📂 Sobre o Projeto

O **NLW Agents** é uma aplicação desenvolvida durante o evento **Next Level Week** promovido pela **Rocketseat**, com o objetivo de explorar o uso de agentes inteligentes na web. Este projeto demonstra a construção de uma aplicação moderna e acessível utilizando as tecnologias mais recentes do ecossistema React.

---

## 🚀 Funcionalidades

- Interface moderna e acessível com **Radix UI** e **Shadcn/UI**
- Integração com agentes inteligentes via **API**
- Gerenciamento de estado servidor com **React Query**
- Roteamento baseado em arquivos
- Estilo com **Tailwind CSS** e suporte a componentes com variantes

---

## ⚙️ Como Instalar

Para rodar o **NLW Agents** localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Matheus1415/Agents
   ```
   
2. **Acesse o diretório do projeto:**

   ```bash
   cd Agents
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Acesse a aplicação no navegador:**

   [http://localhost:5173](http://localhost:5173)

> ⚠️ **Importante**: O projeto consome uma API que deve estar rodando na porta `3333`.  
> Certifique-se de que o backend esteja configurado e ativo antes de iniciar o frontend.

## 📜 Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run preview` — Faz o preview da build de produção

---

## 🛠️ Tecnologias Utilizadas

- **React 19.1** – Biblioteca para interfaces de usuário  
- **TypeScript 5.8** – Superset do JavaScript com tipagem estática  
- **Vite 7.0** – Ferramenta de build rápida e moderna  
- **Tailwind CSS 4.1** – Framework CSS utilitário  
- **React Router Dom 7.6** – Biblioteca de roteamento  
- **TanStack React Query 5.8** – Gerenciamento de estado do servidor  
- **Radix UI** – Componentes de interface acessíveis  
- **Shadcn/UI** – Sistema de componentes moderno  
- **Lucide React** – Biblioteca de ícones SVG open source

---

## 📁 Estrutura do Projeto

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
