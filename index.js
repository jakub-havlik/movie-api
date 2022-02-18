//imports express ( a node.js)framework with middlware module packages  body parser, uuid and morgan
const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  //automatically creates and assigns unique ids to new users
  uuid = require("uuid");

//sets  express’s functionality to a variable
const app = express();

//invokes the middleware module body-parser.
//it allows you to read the “body” of HTTP requests within your request handlers simply by using the code req.body.
app.use(bodyParser.json());

//invokes middle ware function with "common" parameters using the default format
app.use(morgan("common"));


let users = [

{
  id: 1,
name:"Anabel Trigas",
favoriteMovies:[]

},

{
 id: 2,
name:"Jakub Havlik",
favoriteMovies:[]
},

{
  id: 3,
name:"Douglas Dackel",
favoriteMovies:["Black Dynamite"]
}

];


let topMovies = [
  {
    title: "Berlin Alexanderplatz",
    genre: {
      name: "Drama",
      description:
        "The drama genre features stories with high stakes and a lot of conflicts. They’re plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters.",
    },
    director: {
      name: "Burhan Qurbani",
      bio: "Burhan Qurbani (Persian: برهان قربانی) (born in Erkelenz on 15 November 1980) is a German film director, writer and actor of Afghan origin. His directing, writing, and acting works include Shahada (2010), 20xBrandenburg (2010 TV documentary), and Illusion (2007 short film).[1] His modern day adaption of Alfred Döblin's modern classic novel Berlin Alexanderplatz was selected for the main competition of the 2020 Berlin International Film Festival.[2]",
      birth: "1980",
    },
    imgURL: ""
  },
  {
    title: 'Ich bin dein Mensch',
    director: 'Maria Schrader'
  },
  {
    title: 'Soul Kitchen',
    director: 'Fatih Akin'
  },
  {
    title: 'Estiu 1993',
    director: 'Carla Simón'
  },
  {
    title: 'Toni Erdman',
    director: 'Maren Ade'
  },
  {
    title: 'Oh Boy',
    director: 'Jan-Ole Gerster'
  },
  {
    title: 'Black Dynamite',
    director: 'Scott Sanders'
  },
  {
    title: 'Medianeras',
    director: 'Gustavo Taretto'
  },
  {
    title: 'Dona Flor e Seus Dois Maridos',
    director: 'Bruno Barreto'
  },
  {
    title: 'Mary and Max',
    director: 'Adam Elliot'
  }
];


//GET route located at the endpoint "/movies" which returns a json object in form of a  list of top 10 movies with the status 200 "ok"
app.get("/movies", (req, res) => {
  res.status(200).json(topMovies);
});

//GET route located at the endpoint "/movies/title" which returns a json object with a single movie
app.get("/movies/:title", (req, res) => {
  const { title } = req.params; //object destructering, creatinga a variable assigning it to the url requested title
  const movie = topMovies.find((movie) => movie.title === title); //find method that sits on an array which takes a function as a parameter

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).send("no such movie");
  }
});


//GET route located at the endpoint "/movies/title" which returns a json object with a single movie
app.get("/movies/genre/:genreName", (req, res) => {
  const { genreName } = req.params; //object destructering, creatinga a variable assigning it to the url requested title
  const genre = topMovies.find((movie) => movie.genre.name === genreName).genre; //find method that sits on an array which takes a function as a parameter. Very important to add".Genre" at the end. It will only return us the Genre object

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(404).send("no such genre");
  }
});

//GET route located at the endpoint "/movies/title" which returns a json object with a single movie
app.get("/movies/directors/:directorName", (req, res) => {
  const { directorName } = req.params; //object destructering, creatinga a variable assigning it to the url requested title
  const director = topMovies.find((movie) => movie.director.name === directorName).director; //find method that sits on an array which takes a function as a parameter. Very important to add".Genre" at the end. It will only return us the Genre object

  if (director) {
    res.status(200).json(director);
  } else {
    res.status(404).send("no such director");
  }
});


//POST route to add new User
app.post("/users", (req, res) =>{
  const newUser = req.body;

  if(newUser.name) {
newUser.id = uuid.v4();
users.push(newUser)
res.status(201).json(newUser)
  } else {
    res.status(400).send("users need names")
  }
})


//PUT route to update User
app.put("/users/:id", (req, res) =>{
  const { id } = req.params;
  const updatedUser = req.body;

 let user = users.find(user => user.id == id)

 if(user) {
   user.name = updatedUser.name;
   res.status(200).json(user);
 } else {
   res.status(400).send("no such user")
 }

})


//POST route to add movie to favorite
app.post("/users/:id/:movieTitle", (req, res) =>{
  const { id, movieTitle } = req.params;
  const updatedUser = req.body;

 let user = users.find(user => user.id == id)

 if(user) {
   user.favoriteMovies.push(movieTitle)
   res.status(200).send(movieTitle + "has been added to the user" + id + " ´s array");
 } else {
   res.status(400).send("no such user")
 }

})

//DELETE route to delete favorite movie from list
app.delete("/users/:id/:movieTitle", (req, res) =>{
  const { id, movieTitle } = req.params;
  const updatedUser = req.body;

 let user = users.find(user => user.id == id)

 if(user) {
   user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle)
   res.status(200).send(movieTitle + " has been removed from the user " + id + " ´s array");
 } else {
   res.status(400).send("no such user")
 }

})

//DELETE route to delete user
app.delete("/users/:id", (req, res) =>{
  const { id } = req.params;

 let user = users.find(user => user.id == id)

 if(user) {
   users = users.filter(user => user.id != id)
   res.status(200).send("user " + id + " has been deleted");
 } else {
   res.status(400).send("no such user")
 }

})



//GET request to display message in the browser upon entering "localhost:8080" in the browser
app.get("/", (req, res) => {
  res.send("Welcome to my top 10 movies");
});

//setting up server on port 8080, listen for request
app.listen(8080, () => {
  console.log("My app is listening on port 8080.");
});

//express function that automatically routes all requests for static files to their corresponding files in the "public" folder
app.use(express.static("public"));

//Morgan middleware library that logs all request
let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};
app.use(myLogger);

//setting the error handler in express(always put it last in line)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error!");
});
