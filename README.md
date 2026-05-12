# Admin Dashboard

> Painel administrativo com controle de acesso por perfil, construído com React + Vite — sem bibliotecas de UI, apenas componentes limpos e lógica real.

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](LICENSE)

## Visão Geral

Admin Dashboard é um projeto frontend que simula um painel administrativo real de SaaS. Possui sistema de login com dois perfis distintos — Admin e Usuário — cada um com seu próprio layout e permissões. Construído inteiramente com React e variáveis CSS, sem bibliotecas externas de UI.

Parte de um desafio pessoal: **20 projetos em 20 dias** cobrindo Backend, Frontend, Data Science, DevOps, Segurança e IA.

## Funcionalidades

- Autenticação — login com detecção de perfil (admin/usuário)
- Painel Admin — CRUD completo (adicionar, editar, excluir) via modais
- Painel Usuário — visualização somente leitura com edição de perfil
- Cards de KPI — métricas em tempo real: ativos, trials, churned, MRR
- Filtros — busca por nome/email e filtro por status
- Paginação — 8 usuários por página
- Exportar CSV — download da lista completa de usuários
- Tema Dark — sistema de design consistente com variáveis CSS

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Linguagem | JavaScript ES6+ |
| Estilização | CSS Variables (sem lib de UI) |
| Dados | JSON mock |

## Como Rodar

Clone o repositório e instale as dependências:

    git clone https://github.com/Felipe-Coelho-Terossi/Admin-Dashboard.git
    cd Admin-Dashboard
    npm install
    npm run dev

Acesse http://localhost:5173 no navegador.

## Credenciais de Teste

| Perfil  | Email               | Senha    |
|---------|---------------------|----------|
| Admin   | admin@dashboard.com | admin123 |
| Usuário | user@dashboard.com  | user123  |

## Estrutura do Projeto

    src/
    ├── components/
    │   ├── Filters.jsx
    │   ├── KPICard.jsx
    │   ├── Modal.jsx
    │   ├── Navbar.jsx
    │   ├── Pagination.jsx
    │   └── UserTable.jsx
    ├── data/
    │   └── users.json
    ├── hooks/
    │   ├── useAuth.js
    │   └── useUsers.js
    ├── pages/
    │   ├── AdminDashboard.jsx
    │   ├── Login.jsx
    │   └── UserDashboard.jsx
    ├── utils/
    │   └── exportCSV.js
    ├── App.jsx
    └── index.css

## Autor

Felipe Coelho Terossi
Sistemas de Informação — Unicamp, 3º semestre

https://github.com/Felipe-Coelho-Terossi