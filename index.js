

const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));


let topMovies = [
  {
    title: 'Black Dynamite',
    director: 'Scott Sanders'
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
    title: 'Berlin Alexanderplatz',
    director: 'Burhan Qurbani'
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

// GET requests
app.get('/', (req, res) => {
  res.send('welcome to my favourite movies app!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use('/documentation.html', express.static('public'));

app.use(morgan('common'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
