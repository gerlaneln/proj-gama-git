const db = require("../models");
const Cadastro = db.cadastros;
const Op = db.Sequelize.Op;

// Create and Save a new Cadastro
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Cadastro
    const cadastro = {
      cpf: req.body.cpf,
      nome: req.body.nome,
      profissao: req.body.profissao,
      dataNascimento: req.body.dataNascimento,
      estadoCivil: req.body.estadoCivil,
      genero: req.body.genero,
      cep: req.body.cep,
      logradouro: req.body.logradouro,
      num: req.body.num,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      telFixo: req.body.telFixo,
      celular: req.body.celular,
      email: req.body.email,
      rg: req.body.rg,
      veiculo: req.body.veiculo,
      cnh: req.body.cnh
    };
  
    // Save Tutorial in the database
    Cadastro.create(cadastro)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro na criação do cadastro."
        });
      });
  };

// Retrieve all Cadastros from the database.
exports.findAll = (req, res) => {

};

// Find a single Cadastro with an id
exports.findOne = (req, res) => {
  
};

// Update a Cadastro by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Cadastro with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Cadastros from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Cadastros
exports.findAllPublished = (req, res) => {
  
};