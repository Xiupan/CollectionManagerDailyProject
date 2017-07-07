const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie")

router.get('/newmovie', function(request, response){
  response.render('newmovie');
})

router.post('/newmovie', function(request, response){
  const movie = new Movie();
  movie.name = request.body.movieName;
  movie.year = request.body.movieYear;
  movie.director = request.body.director;
  movie.mainActor = request.body.mainActor;
  movie.imdbLink = request.body.imdbLink;
  movie.save()
  .then(function(){
    response.redirect('/');
  })
})

module.exports = router;
