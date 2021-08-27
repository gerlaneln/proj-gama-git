const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require ('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

//senha 6T1M4LHjii2zca46

mongoose.connect('mongodb+srv://admin:6T1M4LHjii2zca46@cluster0.a49dz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(cors())
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
//app.listen('3300', () => {
//    console.log('rodando na porta 3300');
//});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});