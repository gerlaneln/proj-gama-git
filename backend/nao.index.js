const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql2 = require('mysql2');
 
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
//create database connection
const conn = mysql2.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'jobsnet',
  dialect: 'mysql',
  socketPath: '/var/run/mysqld/mysqld.sock'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
  
//show single product
app.get('/api/products/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
app.post('/api/products',(req, res) => {
let data = {
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
let sql = "INSERT INTO cadastros SET ?";
let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});
 
//Server listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});