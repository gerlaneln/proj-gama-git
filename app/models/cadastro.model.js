const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Cadastro = sequelize.define("cadastro", {
        nome: {
            type: Sequelize.STRING
        },
        profissao: {
            type: Sequelize.STRING
        },
        dataNascimento: {
            type: Sequelize.STRING
        },
        estadoCivil: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        cep:{
            type: Sequelize.STRING
        },
        logradouro: {
            type: Sequelize.STRING
        },
        num: {
            type: Sequelize.STRING
        },
        bairro: {
            type: Sequelize.STRING
        },
        cidade: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },
        telFixo: {
            type: Sequelize.STRING
        },
        celular: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        rg: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        veiculo: {
            type: Sequelize.STRING
        },
        cnh: {
            type: Sequelize.STRING
        }

    });

    return Cadastro;
};