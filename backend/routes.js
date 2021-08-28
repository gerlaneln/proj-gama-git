const express = require('express');
const ControlaCandidato =  require('./app/controllers/ControlaCandidato');
const Candidato = require('./app/models/Candidato');
const routes = new express.Router();

routes.post('/register', ControlaCandidato.register);

routes.get('/find', async (req, res) => {
    console.log("Entrei");
    try{
        console.log("Try");
        console.log(req.query);
        const teste = await Candidato.find(req.params.find);
        //res.json(teste);
        //console.log(teste);
        //const test = await Candidato.find(req.params.cpf);
        //res.json(test);
        //console.log(test);
        //const cpf = user = await Candidato.find({ cpf: req.query});
        //console.log(cpf);
        if(teste.status === 200){
            console.log("Esse CPF existe no banco de dados");
            return true;
        }else{
            console.log("Esse CPF não existe no banco de dados");
            return false;
        }
    }catch (err){
        console.log(err);
        return res.status(500).send('Erro na busca.');
    }
});

routes.get ('/', (req, res) =>{
    res.send('Tudo certo aqui.')
});

module.exports = routes;