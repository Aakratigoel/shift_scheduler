// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require("../config/passport");
// Routes
// =============================================================


  // GET route for getting all of the todos
  router.get("/api/employee", function(req, res) {
    db.Organization.findAll().then(function(dbOrganization) {
      res.json(dbOrganization);
    });
  });

  // POST route for saving a new organization. We can create a organization using the data on req.body
//   app.post("/api/posts", function(req, res) {
//     console.log(req.body);
//     db.Post.create({
//       title: req.body.title,
//       body: req.body.body,
//       category: req.body.category
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
  router.post("/api/organization", function(req, res) {
    console.log(req.body);
    db.Organization.create({
              name: req.body.name,
            })
              .then(function(dbOrganization) {
                res.json(dbOrganization);
              });
  });

  router.post("/api/employee", function(req, res) {
    console.log(req.body);
    db.Employee.create({
              Emp_Name: req.body.Emp_Name,
              Emp_Email:req.body.Emp_Email,
              Emp_Organization:req.body.Emp_Organization,
              Emp_NumberOfWorkingDays:req.body.Emp_NumberOfWorkingDays,
              Emp_shift_time_start:req.body.Emp_shift_time_start,
              Emp_shift_time_end:req.body.Emp_shift_time_end,
              Emp_password:req.body.Emp_password
            })
              .then(function(dbEmployee) {
                res.json(dbEmployee);
              });
  });

  // app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
  // function(req, res) {
  //   res.redirect('/');
  // });

  router.post("/api/employeeLogin", passport.authenticate("local"),function(req,res){
   
   res.json("/shifts");
  });

  
  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
//   router.delete("/api/todos/:id", function(req, res) {
//     db.Todo.destroy({
//     where:
//     {id:req.params.id}
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

  // // PUT route for updating todos. We can access the updated todo in req.body
  // app.put("/api/todos", function(req, res) {
  //   orm.editTodo(req.body, function(results) {
  //     res.json(results);
  //   });
  // });

  module.exports = router;

