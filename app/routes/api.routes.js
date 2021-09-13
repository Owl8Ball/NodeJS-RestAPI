module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create
    router.post("/users/new", users.createUser);
  
    app.use('/api', router);
};