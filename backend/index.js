const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require ('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://admin:6T1M4LHjii2zca46@cluster0.a49dz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));

app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});