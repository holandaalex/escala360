# Escala360

Este repositório contém o sistema completo de Gestão de Escalas Hospitalares.

## 📁 Estrutura do Projeto

- **Escala360-melhorias/**: Pasta principal do projeto, contendo todo o código-fonte (frontend, backend, banco de dados, documentação e scripts).

## 🚀 Requisitos

- Node.js (>= 18)
- npm (>= 9)
- (Opcional) Git para clonar o repositório

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/holandaalex/escala360.git
cd escala360
```

### 2. Acesse a pasta principal do projeto

```bash
cd Escala360-melhorias
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

- O banco SQLite já está pronto na pasta `/db`.
- Se necessário, execute o script `escala360.sql` para recriar o banco.

### 5. Inicie o backend

```bash
cd backend
node server.js
```

O backend será iniciado em `http://localhost:3001`.

### 6. Inicie o frontend

Abra um novo terminal, acesse novamente a pasta principal e rode:

```bash
npm run dev
```

O frontend será iniciado em `http://localhost:5173` (ou porta informada no terminal).

### 7. Acesse o sistema

Abra o navegador e acesse:

```
http://localhost:5173
```

---

## 🗂️ Estrutura de Pastas

```
Escala360-melhorias/
├── backend/           # Backend Node.js/Express
├── db/                # Banco de dados SQLite e scripts
├── src/               # Frontend React/TypeScript
│   └── components/    # Componentes React
├── public/            # Assets públicos
├── package.json       # Configuração do projeto
├── README.md          # Este arquivo
└── ...
```

## 📝 Funcionalidades Principais

- Dashboard interativo
- Gestão de profissionais
- Criação e gerenciamento de escalas
- Substituições inteligentes
- Relatórios e consultas SQL
- Notificações automáticas (e-mail e WhatsApp)
- Manual do usuário integrado
- Configurações avançadas

## 👨‍💻 Contato

Desenvolvido por Alexsander H. Barreto  
[alexholanda.com.br](https://alexholanda.com.br)

---

Se tiver dúvidas, sugestões ou quiser contribuir, fique à vontade para abrir uma issue ou entrar em contato!
