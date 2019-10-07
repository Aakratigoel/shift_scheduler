// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
router.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname, "../public/home_organization.html"));
})

router.get("/employee",function(req,res)
{
    res.sendFile(path.join(__dirname, "../public/employee.html"));
})

router.get("/employeeLogin", function(req, res) {
    // If the user already has an account send them to the members page
    console.log("something printing");
    res.sendFile(path.join(__dirname, "../public/employee_login.html"));
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  router.get("/shifts", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employee.html"));
  });
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
module.exports = router;