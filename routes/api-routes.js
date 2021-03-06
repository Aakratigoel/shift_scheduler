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
var organizationList ;
var shiftList;
// Routes
// =============================================================


  // GET route for getting all of the todos
  router.get("/api/employee", function(req, res) {
    db.Organization.findAll().then(function(dbOrganization) {
      
      organizationList=JSON.stringify(dbOrganization);
      console.log(organizationList);
      res.json(dbOrganization);
    
    });
  });
  // // router.get("/api/employee_profile",function(req, res) {
  // //   db.Employee.findAll().then(function(dbEmployee) {
  // //     employee=JSON.stringify(dbEmployee);
  // //     console.log(employee);
  // //     res.json(dbEmployee);
  // //   });
  // });

  router.get("/api/employee_profile", function(req,res) {
    if (req.user === undefined || req.user === null || !req.user) {
        // The user is not logged in
        res.json({});
    } else {
        res.json({
            user: req.user
        });
    }
});

router.get("/api/shift_request", function(req,res) {
  if (req.user === undefined || req.user === null || !req.user) {
    // The user is not logged in
    res.json({});
} else {
  db.Shift.findAll({
    where :{
      Emp_Organization:req.user.Emp_Organization
    }
  }).then(function(dbShift) {
    console.log("In api routes",dbShift);
    res.json({
      s:dbShift,
      ru:req.user
    });
  
  });
}
  
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
      db.Organization.findOrCreate({
        where: {
          name: req.body.name
        }
      })
        .then(function(dbOrganization) {
          console.log(dbOrganization[1]);
         if(dbOrganization[1])
         {
           res.json(dbOrganization);
         }
         else
         {
           res.json("Already Exists");
         }
          
         
        });
   
  });

  router.post("/api/employee", function(req, res) {
    console.log(req.body);
    db.Employee.findOrCreate({
      where:
      {
        Emp_Email:req.body.Emp_Email,
      },
      defaults :
      {
        Emp_Name: req.body.Emp_Name,
        Emp_Organization:req.body.Emp_Organization,
        Emp_NumberOfWorkingDays:req.body.Emp_NumberOfWorkingDays,
        Emp_shift_time_start:req.body.Emp_shift_time_start,
        Emp_shift_time_end:req.body.Emp_shift_time_end,
        Emp_password:req.body.Emp_password
      }})
              .then(function(dbEmployee) {
                console.log(dbEmployee[1]);
         if(dbEmployee[1])
         {
           res.json(dbEmployee);
         }
         else
         {
           res.json("Already Exists");
         }
              });
  });

  // app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
  // function(req, res) {
  //   res.redirect('/');
  // });

  router.post("/api/employeeLogin", passport.authenticate("local"),function(req,res){
    console.log('REDIRECTING ');
    res.json(req.body.email);
  });

 router.post("/api/employee_profile",function(req,res){
  console.log(req.body);
  db.Shift.create({
            Emp_id:req.body.Emp_id,
            Emp_Name: req.body.Emp_Name,
            Emp_Email:req.body.Emp_Email,
            Emp_Organization:req.body.Emp_Organization,
            Emp_Request_shift_time_start:req.body.Shift_Request_Start_Time,
            Emp_Request_shift_time_end:req.body. Shift_Request_End_Time,
            Emp_Request_Status:req.body.Shift_Status,
            Emp_AcceptedByEmail:req.body.AcceptedByEmail,
            Emp_AcceptedByName:req.body.AcceptedByName
          })
            .then(function(dbShift) {
              res.json(dbShift);
            });
 })


 router.put("/api/shiftRequest",function(req,res)
 {
   console.log(req.body);
  db.Shift.update(
    {Emp_Request_Status: "Accepted",
    Emp_AcceptedByEmail:req.body.rabe,
    Emp_AcceptedByName:req.body.rabn
  },
    {where: {Emp_Email:req.body.em}}
  )
  .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  })
 })
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

