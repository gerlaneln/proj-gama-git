//const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Cadastro = sequelize.define("cadastro", {
        cpf: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        profissao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dataNascimento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estadoCivil: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        cep:{
            type: Sequelize.STRING,
            allowNull: false
        },
        logradouro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        num: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telFixo: {
            type: Sequelize.STRING
        },
        celular: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        rg: {
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