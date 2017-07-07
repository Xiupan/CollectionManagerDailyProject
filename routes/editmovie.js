const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie")

router.get('/edit/:id', function(request, response){
  Movie.findOne({"_id": request.params.id})
  .then(function(movie){
    response.render("editmovie", {
      movie: movie
    })
  })
})

router.post('/edit/:id', function(request, response){
  Movie.findOne({"_id": request.params.id})
  .then(function(movie){
    console.log(movie);
    movie.name = request.body.movieName;
    movie.year = request.body.movieYear;
    movie.director = request.body.director;
    movie.mainActor = request.body.mainActor;
    movie.imdbLink = request.body.imdbLink;
    movie.save().then(function(editedMovie){
      response.redirect('/');
    })
  })
})

module.exports = router;
