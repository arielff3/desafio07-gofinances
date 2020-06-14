
<h1 align="center">
  <img src="https://github.com/arielff3/gostack11-desafio-conceitos-nodejs/raw/master/.github/readmeLogo.png" alt="GoStack">
</h1>

<h2 align="center">Desafio 05: Fundamentos Node.js</h2>


## 🚀 Sobre o desafio

<p>sexto desafio do GoStack 11 para aprimorar os conhecimentos em Node.js</p>
<p>Aplicação lida com o upload de arquivos csv no banco de dados.</p>

## 🔧 Tecnologias
<p>Esse projeto foi desenvolvido com as seguintes tecnologias:</p>

- [Node.js]()
- [Express]()
- [Docker]()
- [Postgres]()
- [TypeOrm]()
- [Nodemon]()
- [Jest]()
- [TypeScript]()

## 💾 Instalação

```bash
# Crie um container com a imagem do postgres rodando na porta 5432.
$ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres  
# Clone o repositório
https://github.com/arielff3/gostack11-desafio-fundamentos-nodejs
# Em seguida execute:
$ cd desafio-database-gostack11
$ yarn
# Para iniciar a aplicação
$ yarn dev:server
#Para inicar os testes
$ yarn test
