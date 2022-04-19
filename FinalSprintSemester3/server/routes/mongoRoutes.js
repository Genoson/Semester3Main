// functions to handle requests to and from the mongo database via the server

// require and import statements
const express = require("express");
const logger = require("../logger/logger");

// define objects
// router object
const mongoRouter = express.Router();
// database object
const dbo = require("../db/mongoConn");


// handling mongo object id
const ObjectId = require("mongodb").ObjectId;

//routes for specific requests to and from the mongo database

// routes for user authentication, authorization, and registration (login/logout/signup)
// get all users
mongoRouter.route("/users").get((req, res) => {
  let db_connect = dbo.getDb("searchAnimals");
  db_connect
    .collection("users")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// get a specific user
mongoRouter.route("/users/:userName").get((req, res) => {
  let db_connect = dbo.getDb("searchAnimals");
  db_connect
    .collection("users")
    .findOne({ userName: req.params.userName }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// add a new user
mongoRouter.route("/users/add").post((req, res) => {
  let db_connect = dbo.getDb("searchAnimals");
  db_connect.collection("users").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// search route 1, business name
// mongoRouter.route("/search/businessName/:businessName").get((req, res) => {
//     let db_connect = dbo.getDb()
//     let myquery = { name: `"${req.params.businessName}"` }
//     db_connect.collection("business").findOne(myquery, (err, result) => {
//         if (err) throw err;
//         res.json(result);
//     }
//     )

// });

// broken, kept for posterity
mongoRouter.route("/search/partial/:partial").get((req, res) => {
  let db_connect = dbo.getDb("searchAnimals");
  console.log(req.params.businessName);
  db_connect
    .collection("business")
    .find({ $text: { $search: String(req.params.partial) } })
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
      // console.log(result);
      if (result) console.log("search executed");
    });

});

// copied for posterity incase i break it
mongoRouter.route("/search/businessName/:businessName").get((req, res) => {
  let db_connect = dbo.getDb("searchAnimals");
  console.log(req.params.businessName);
  db_connect
    .collection("business")
    .find({ name: String(req.params.businessName) })
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
      // console.log(result);
      if (result) console.log("search executed");
    });
});

mongoRouter.route("/search/city/:city").get((req, res) => {
  let db_connect = dbo.getDb("searchAnimals");
  console.log(req.params.city);
  db_connect
    .collection("business")
    .find({ city: String(req.params.city) })
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
      // console.log(result);
      if (result) console.log("search executed");
    });
});

mongoRouter.route("/log").post((req, res) => {
  console.log(req.body);
  let db_connect = dbo.getDb("searchAnimals");
  db_connect.collection("log").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

})

// routes for searching for records

module.exports = mongoRouter;
