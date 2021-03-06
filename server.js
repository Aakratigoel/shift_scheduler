// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory

app.use(express.static("public"));

//passport npm
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
var htmlroute = require('./routes/html-routes.js');
var apiroute = require('./routes/api-routes.js');
app.use(htmlroute);
app.use(apiroute);
// Starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function()
{
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
})

