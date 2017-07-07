const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie")

router.get('/', function(req, res){
  Movie.find()
  .sort("-year")
  .then(function(movies){
    res.render("index", {
      movies: movies
    })
  })
})

router.post('/delete/:id', function(request, response){
  Movie.deleteOne({"_id": request.params.id})
  .then(function(deletedMovie){
    response.redirect('/');
  })
})

module.exports = router;
