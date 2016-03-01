
var restify = require('restify');
var path = require('path');
var models = require('./models');


// Setting Parameters to server
var app = restify.createServer({
    name: "SchedIt"
});

// Initiating All Routes avaliable in ./route folder
//var routes =require('./routes');

// Using bodyparser for POST Request Parameters
app.use(restify.bodyParser());

var routes = require('./routes/api');

// Creating Tables or Initiating Connections
models
    .sequelize
    .sync({ force: false})
    .then(function() {
        try{
            // Listening in 8080 Port
            app.listen(3000);
            console.log("Server started: http://localhost:3000/");

        }catch(err) {}
    });