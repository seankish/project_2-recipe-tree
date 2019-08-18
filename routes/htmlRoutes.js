var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.recipes.findAll({}).then(function(dbrecipes) {
      res.render("index", {
        msg: "Welcome!",
        recipes: dbrecipes
      });
    });
  });
<<<<<<< HEAD
  // Load recipe page and pass in an recipe by id
  app.get("/recipes/:id", function(req, res) {
    db.recipes.findOne({ where: { id: req.params.id } }).then(function(dbrecipes) {
      res.render("recipes", {
        recipes: dbrecipes
=======

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
>>>>>>> 2144c72cef078a7a557b9c4352c67b77050cc1cc
      });
    });
  });
  app.get("/recipes", function (req,res) {
res.render("recipes");
  });
  app.get("/addrecipe", function(req,res){
    res.render("addRecipe");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
