// List all movies on home page
// User must be able to add a movie to the db.collection
// User must be able to edit a movie
// User must be able to delete a movie

const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

const homeRoutes = require("./routes/home");
const newMovieRoutes = require("./routes/newmovie");

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/movies');

app.use(homeRoutes);
app.use(newMovieRoutes);

app.listen(3000, function(){
  console.log("Movie Collection app running!")
})
