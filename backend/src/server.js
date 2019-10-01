const express = require('express'); //microframework dentro do node
const mongoose = require('mongoose'); //user o mongoose
const routes = require('./routes'); //caminho relativo para chamar o arquivo routes.js, n precisa da extensão

const app = express();

mongoose.connect('MONGODBATLASURLCONNECTION', {
    useNewUrlParser:true, //instruções para tirar os warnings 1
    useUnifiedTopology:true //instruções para tirar os warnings 2
})

//GET - buscar info, via browser
//POST - criar nova informação, cadastro e etc - n testa via browser, usar insomnia/postman
//PUT - editar alguma informação 
//DELETE - o nome já diz hehe

//req.query - acessar query params (para filtros (GET))
//req.param - acessar route params (para edição (PUT) e delete )
//req.body - acessar corpo da requisição (para criação e edição de registros)

app.use(express.json());

app.use(routes);

app.listen(3333); //roda o servidor na porta 3333