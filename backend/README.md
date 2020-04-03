<h1 align="center">
    <img alt="BeTheHero" title="#delicinha" src="../.github/logo.png" width="250px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#collision-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-rodando-o-projeto">Rodando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#notebook-enpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<h2>
<strong>Backend</strong> da aplicação Be The Hero.
</h2>

## :rocket: Tecnologias

### **Ferramentas usadas**

- Express + Nodemon
- Knex + SQLite3

## :collision: Funcionalidades

Abaixo estão descritas as funcionalidades do backend:

### **Administrador**

### 1. Autenticação

Autenticação do usuário administrador com ID.

### 2. Gestão de casos

Cadastro de casos que necessitam de ajuda na aplicação.

### **Usuário**

### 1. Visualizar de casos

## :zap: Rodando o projeto

1 - Em um terminal, entrar na raiz do projeto **/backend** e rodar o comando:

```
$ yarn install
```

2 - Ainda na raiz do projeto, rodar o comando:

```
$ yarn dev
```

Feito isso, acessar o endereço http://localhost:3333

Se desejar, pode rodar o projeto em modo debug, usando o seguinte comando:

```
$ yarn dubug
```

Está disponível também testes de integração e unitários:

```
$ yarn test
```

### Migrations

Para a criar o banco de dados, é disponibilizado **migrations** dentro do diretório **/src/database**, rodar o seguinte comando na raiz do projeto:

```
$ yarn knex migrate:latest
```

## :notebook: Endpoints

Você pode executar online ou fazer o download dos endpoints e executar diretamente no Insomnia:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=&uri=https%3A%2F%2Fraw.githubusercontent.com%2FWallysonGalvao%2Frocketseat-omnistack-semana11%2Fmaster%2Fbackend%2Fendpoints.json)
