# movie-api



## Description

A RESTful movie API combining express, nodejs , and mongodb on the server side, and react on the client-side (MERN stack basically).



### What does it do?

It allows users to access a database to receive information on a collection of movies. The user can access data about the movies such
as synopsis, directors´ biographies, and genre descriptions. Furthermore, the user can sign up, update personal information and save/delete favorite movies to/from his/her personal profile.



## How to install and run the project?

1. Clone or download repository ...
```bash
git clone https://github.com/nine-chairs/movie_api.git
```

3. install mongodb
```bash
npm install mongodb
```

4. Connect with own MongoDB (local or external)
define CONNECTION_URI as environment variable, otherwise it will connect to mongodb://localhost:27017/test

5. start the server
```bash
npm run start
```


### Technical Requirements

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



### Endpoints

Open this link to see a documentation of the used endpoints:

https://listapeli.herokuapp.com/documentation.html



### Installation of all dev dependencies and express middleware for development

See the dependencies listed in the package.json:

__See the package.json file__


### Create and populate non-relational database MongoDB

* use database schema diagram to sketch structure of database, division into two collections ("movies" and "users").
* installing mongo shell
* use Mongo Shell to create database with CRUD operations
* Create the 2 collections "movies" and "users".
* Add 10 documents to the "movies" collection (including embedded documents for the keys "genre" and "director").
* In the "users" collection - consisting of 4 documents - references are used to store information about the user's favorite movies.

### Building models with Mongoose (Business Logic)

Use Mongoose to build the Business Logic Layer linking the database from MongoDB to the server (and finally to the Web Browser).

Process:
* Installation of object model driver Mongoose
* Installation of dependencies: jsonwebtoken (jwt), bcrypt
* Configuring the schemata for the users and the movies collection
* Creation of the Models in a separate models.js file
* Exporting the models to index.js
* Rewriting the CRUD operations to query the mongoose models
* Integrating Mongoose with the REST API
* Apply local and jwt authentication methods
* Test the endpoints in Postman



### Hosting on MongoDBAtlas (DBaaS) and HEROKU (PaaS)

Process:
* register with heroku, install toolbelt
* change port
* create Heroku app
* create mongodb instance on MongoDBAtlas
* export MongoDB database with mongodump (each collection as json, without commas between documents, not arrays)
* push Git main to Heroku

