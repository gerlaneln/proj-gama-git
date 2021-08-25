module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "jobsnet",
    dialect: "mysql",
    socketPath: '/var/run/mysqld/mysqld.sock',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };