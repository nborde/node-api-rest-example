// Ejemplo tomado de : http://carlosazaustre.es/blog/como-crear-una-api-rest-usando-node-js/
/*var express = require("express"),
	app 	= express(),
	http	= require("http"),
	server	= http.createServer(app),
	mongoose = require('mongoose');

app.configure(function (){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/', function(req, res){
	res.send("Hello World Nico !!");
});

// Conectar con base de datos, en este caso Mongoose.
mongoose.connect('mongodb://localhost/tvshows', function(err, res){
	if (err) {
		console.log("Error conectando a la base de datos. ");
	} else{
		console.log("Conectado a la base.");
	};
});


server.listen(3000, function(){
	console.log("Node server running on http://localhost:3000");
});
*/

var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/tvshows')(app);

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});