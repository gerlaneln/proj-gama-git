module.exports = app => {
    const cadastros = require("../controllers/cadastro.controller.js");
  
    var router = require("express").Router();
  
    // Create a new cadastro
    router.post("/", cadastros.create);
  
    // Retrieve all cadastros
    router.get("/", cadastros.findAll);
  
    // Retrieve all published cadastros
    router.get("/published", cadastros.findAllPublished);
  
    // Retrieve a single cadastro with id
    router.get("/:id", cadastros.findOne);
  
    // Update a cadastro with id
    router.put("/:id", cadastros.update);
  
    // Delete a cadastro with id
    router.delete("/:id", cadastros.delete);
  
    // Delete all cadastros
    router.delete("/", cadastros.deleteAll);
  
    app.use('/api/cadastros', router);
  };