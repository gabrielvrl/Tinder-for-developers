const express =require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();


// Métodos principais: GET, POST, PUT, DELETE
// O navegador sempre envia um metodo GET, a não ser que tenha um formulário, aí usa post e para testar o metodo post utilizamos o software Insonmia
routes.get('/', (req, res) => {
    //return res.send('Hello World')   retorna Hello World no Chrome
    //return res.send(`Hello ${req.query.name}`) // retorna o que eu colocar no localhost:3333?name=Gabriel nesse caso eu to passando name e ele retorna Gabriel
    return res.json({ message: `Olá ${req.query.name}` }); // nao fica legal enviar so um texto, eh melhor enviar um objeto ou um vetor
});


//primeiro modelo para chamar e mandar informacoes
/*routes.post('/devs', (req, res) =>{
    console.log(req.body);//pega informacao (tem que falar pro express que vou usar json)
    return res.json({ ok: true}); //manda informacao
});
*/

routes.get('/devs', DevController.index)
//podemos fazer com a funcao DevController
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;