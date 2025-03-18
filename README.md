# Sistema de Agendamento de Clínica

Este é um sistema de gerenciamento de agendamentos para clínicas, desenvolvido com **Node.js**, **Express**, **MongoDB** e **EJS** para a renderização das views. A aplicação oferece uma interface simples para gerenciar consultas, com uma integração com o **FullCalendar** para exibir a agenda de forma visual e intuitiva. Além disso, a aplicação envia confirmações de consultas e lembretes um dia antes das consultas.

## Funcionalidades

- **Agendamento de Consultas**: O sistema permite que os usuários agendem consultas, informando nome, email, CPF, descrição e horário.
- **Calendário de Consultas**: O agendamento de consultas é exibido em um calendário interativo, utilizando o **FullCalendar**.
- **Confirmação e Lembrete de Consulta**: O sistema envia e-mails de confirmação imediatamente após o agendamento e lembretes um dia antes da consulta.
- **Finalização de Consultas**: Os administradores podem marcar as consultas como finalizadas.
- **Pesquisa de Consultas**: Permite pesquisar consultas agendadas por qualquer critério.
- **Interface Flexível**: A aplicação usa **EJS** para renderização, mas pode ser facilmente substituída por **Vue.js** ou **React.js** para a criação de um front-end mais dinâmico.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework minimalista e flexível para construção de APIs e servidores.
- **MongoDB**: Banco de dados não relacional utilizado para armazenar informações de agendamentos e pacientes.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando a interação com o banco de dados.
- **Nodemailer**: Biblioteca para envio de e-mails, utilizada para enviar confirmações de agendamentos e lembretes de consultas.
- **Body-Parser**: Middleware para parsing de dados em requisições HTTP.

### Frontend
- **EJS**: Template engine para renderizar as views diretamente no servidor.
- **FullCalendar**: Biblioteca JavaScript para exibição de calendários interativos, usada para mostrar os agendamentos de forma visual.

### Outras Tecnologias
- **JavaScript (ES6)**: Utilizado para escrita da lógica de aplicação tanto no backend quanto no frontend.
- **HTML/CSS**: Estruturação e estilização da aplicação.

## Estrutura do Projeto

### Backend (Node.js)
- **`index.js`**: Arquivo principal que configura o servidor e as rotas.
- **`routes/`**: Contém as rotas para agendamentos e operações relacionadas.
  - `index.js`: Define as rotas principais da aplicação.
- **`services/`**: Lógica de negócios, como a criação, busca e finalização de consultas.
- **`views/`**: Contém as views renderizadas pelo EJS.
  - `index.ejs`: Página principal onde os usuários podem visualizar e agendar consultas.
  - `create.ejs`: Página para criar um novo agendamento.
  - `list.ejs`: Página para listar todos os agendamentos existentes.
  - `event.ejs`: Página que exibe os detalhes de uma consulta agendada.
- **`models/`**: Definição dos modelos de dados, como os agendamentos.

### Frontend (EJS)
- **`create.ejs`**: Formulário para criação de consultas.
- **`list.ejs`**: Página que exibe todos os agendamentos realizados.
- **`index.ejs`**: Página principal com a visualização do calendário.
- **`event.ejs`**: Detalhes de um evento específico, permitindo ao administrador finalizar o agendamento.

## Rotas da API

A aplicação possui as seguintes rotas principais:

- **GET `/`**: Exibe a página principal (`index.ejs`), com o calendário de agendamentos.
- **GET `/cadastro`**: Exibe o formulário para cadastro de novas consultas (`create.ejs`).
- **POST `/create`**: Cria um novo agendamento de consulta.
- **GET `/getcalendar`**: Retorna todos os agendamentos para exibição no calendário (`FullCalendar`).
- **GET `/event/:id`**: Exibe os detalhes de um agendamento específico (`event.ejs`).
- **POST `/finish`**: Finaliza o agendamento de uma consulta.
- **GET `/list`**: Exibe a lista de todas as consultas agendadas (`list.ejs`).
- **GET `/searchresult`**: Exibe as consultas filtradas pela pesquisa do usuário.

