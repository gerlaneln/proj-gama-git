module.exports = app => {
    const cadastros = require("../controllers/cadastro.controller.js");
  
    var router = require("express").Router();
  
    // Create a new cadastro
    router.post("/cadastro", cadastros.create);
      
    // Retrieve a single cadastro with id
    //router.get("/:id", cadastros.findOne);
      
    app.use('/api/cadastros', router);
  };