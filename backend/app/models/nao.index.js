const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  port: dbConfig.port,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0, //ou false
  socketPath: dbConfig.socketPath,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cadastro = require("./cadastro.model.js")(sequelize, Sequelize);

module.exports = db;