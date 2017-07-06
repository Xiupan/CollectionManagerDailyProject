const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {type: String, required: true},
  genre: {type: [String]},
  year: {type: Number, required: true},
  director: {type: String, required: true},
  mainActor: {type: String, required: true},
  imdbLink: {type: String, required: true}
})

const Movie = mongoose.model('Movie', movieSchema);

// const movie = new Movie()
// movie.name = "The Terminator"
// movie.genre = ["Sci-fi", "Action"]
// movie.year = 1984
// movie.director = "James Cameron"
// movie.mainActor = "Arnold Schwarzenegger"
// movie.imdbLink = "http://www.imdb.com/title/tt0088247/"
// movie.save()
// .then(function(movie){
//   console.log(movie);
// })
// .catch(function(validationError){
//   console.log("Haha nope!")
// })

module.exports = Movie;
