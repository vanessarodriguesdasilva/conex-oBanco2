
// puxando as configuracoes da biblioteca "dotenv"
require("dotenv").config(); 

// importando o arquivo "db.js"
const db = require("./db");

// pegando a porta do banco de dados
const port = process.env.PORT;

// atribuindo a biblioteca "express" a variavel "express"
const express = require('express');

// atribuindo o "express" no "app" para separar e deixar organizado
const app = express();

// usando a variavel "app" para usar o caminho e a variavel "express" para dizer que as informacoes serao mandadas em JSON
app.use(express.json());



// rota para buscar um cliente especifico
app.get('/client/:id', async (req, res) => {

    // pega o para,etro "id" presente na URL (corresponde ao CPF do cliente)
    const cliente = await db.selectCustomer(req.params.id);

    // responde com os dados do cliente em formato 
    res.json(cliente);
});



// rota para inserir clientes app.post("/nomeDoBanco", async (parametroRequerimento, parametroResposta) => { . . . });
app.post("/client", async (req, res) => {

    // espera o requerimento (as informacoes a serem postadas) do db.insertCustomer (chama a funcao insertCustomer do db.js)
    await db.insertCustomer(req.body)

    // responder com 201 (o status HTTP 201 indica que o recurso foi criado corretamente.) quando der certo
    res.sendStatus(201)
});



// permite que o browser possa acessar as informacoes atribuidas a essa porta
app.listen(port);

console.log("Backend Rodando!")