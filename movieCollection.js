// User must be able to delete a movie

const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

const homeRoutes = require("./routes/home");
const newMovieRoutes = require("./routes/newmovie");
const editMovieRoutes = require("./routes/editmovie");

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/movies');

app.use(homeRoutes);
app.use(newMovieRoutes);
app.use(editMovieRoutes);

app.listen(3000, function(){
  console.log("Movie Collection app running!")
})
