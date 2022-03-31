// the routes of our server

const express = require("express");

// recordRoutes is an instance of express router
// this is how we create a new router
// it will exist as middleware in our server

const recordRoutes = express.Router();

// database connection

const dbo = require("../db/conn");

// object id handling code

const ObjectId = require("mongodb").ObjectId;

// get all records

recordRoutes.route("/record").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// single record get

recordRoutes.route("/record/:id").get((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// create a record

recordRoutes.route("/record/add").post((req, response) => {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("records").insertOne(myobj, (err, result) => {
    if (err) throw err;
    response.json(result);
  });
});

// update a record by id

recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, result) {
      if (err) throw err;
      response.json(result);
    });
});

// delete a record by id
recordRoutes.route("/:id").delete(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, result) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(result);
  });
});

module.exports = recordRoutes;
