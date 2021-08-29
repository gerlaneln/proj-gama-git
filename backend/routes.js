const express = require('express');
const cors = require('cors');
const ControlaCandidato =  require('./app/controllers/ControlaCandidato');
const Candidato = require('./app/models/Candidato');
const routes = new express.Router();

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
}

routes.post('/register', ControlaCandidato.register);

routes.get('/find', cors(corsOptions), async (req, res, next) => {

    console.log("Entrei");
    try{
        console.log("Try");
        console.log(req.query);
        //console.log(req.params.find);
        const teste = await Candidato.find(req.query);
        
        console.log(teste);

        if('_id' in teste || teste.hasOwnProperty('_id')){
            console.log("Esse CPF existe no banco de dados");
            return res.status(200);
        }else{
            console.log("Esse CPF não existe no banco de dados");
            return res.status(500);
        }
    }catch (err){
        console.log(err);
        return res.status(500).send('Erro na busca.');
    }
});

routes.get ('/', (req, res, next) =>{
    res.send('Tudo certo aqui.')
});

module.exports = routes;