const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie")

router.get('/', function(req, res){
  Movie.find()
  .sort("year")
  .then(function(movies){
    res.render("index", {
      movies: movies
    })
  })
})

module.exports = router;
