const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema ({
    cpf: {
        type: String,
        required:true,
        unique: true
    },
    nome: {
        type: String,
        required:true
    },
    profissao: {
        type: String,
        required:true
    },
    dataNascimento: {
        type: String,
        required:true
    },
    estadoCivil: {
        type: String
    },
    genero: {
        type: String
    },
    cep:{
        type: String,
        required:true
    },
    logradouro: {
        type: String,
        required:true
    },
    num: {
        type: String,
        required:true
    },
    bairro: {
        type: String,
        required:true
    },
    cidade: {
        type: String,
        required:true
    },
    estado: {
        type: String,
        required:true
    },
    telFixo: {
        type: String,
    },
    celular: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    rg: {
        type: String
    },
    veiculo: {
        type: String
    },
    cnh: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
