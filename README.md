
# movie-api



## Description

A RESTful movie API combining express, nodejs , and mongodb on the server side, and react on the client-side (MERN stack basically).



## Key features

It allows users to access a database to receive information on a collection of movies. The user can access data about the movies such
as synopsis, directors´ biographies, and genre descriptions. Furthermore, the user can sign up, update personal information and save/delete favorite movies to/from his/her personal profile.



## Technical Requirements

* MongoDB
* node.js, usage of package.json
* Express
* RESTful architecture
* usage of at least three middleware modules
* database: built with MongoDB
* business logic layer: modeled with Mongoose
* API return movies in JSON
* no code-errors
* testing in Postman
* security measures: code for user authentication, user authorization, data validation, meet data security regulations (GDPO)
* Deployment on GitHub
* Deployment on Heroku



## Endpoints

Open this link to see a documentation of the used endpoints:

https://listapeli.herokuapp.com/documentation.html



## How to install and run the project?

1. Clone or download repository
```bash
git clone https://github.com/nine-chairs/movie_api.git
```

2. Install dependencies (see the package.json file)
```bash
npm install
```

3. Install mongodb
```bash
npm install mongodb
```

4. Connect with MongoDB (local or external)
define CONNECTION_URI as environment variable, otherwise it will connect to mongodb://localhost:27017/test

5. start the server
```bash
npm run start
```












