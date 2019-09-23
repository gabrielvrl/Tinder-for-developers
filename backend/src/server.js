const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://username:password@cluster0-zruol.mongodb.net/omnistack8?retryWrites=true&w=majority', 
    {useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);


//As rotas eh melhor colocar em um arquivo separado, nesse caso routes.js
// Métodos principais: GET, POST, PUT, DELETE
//server.get('/', (req, res) => {
    //return res.send('Hello World')   retorna Hello World no Chrome
    //return res.send(`Hello ${req.query.name}`) // retorna o que eu colocar no localhost:3333?name=Gabriel nesse caso eu to passando name e ele retorna Gabriel
    //return res.json({ message: `Olá ${req.query.name}` }); // nao fica legal enviar so um texto, eh melhor enviar um objeto ou um vetor
//});

server.listen(3333);