const express = require('express');
const ControlaCandidato =  require('./app/controllers/ControlaCandidato')
const routes = new express.Router();

routes.post('/register', ControlaCandidato.register);
routes.get ('/', (req, res) =>{
    res.send('Tudo certo aqui.')
});

module.exports = routes;