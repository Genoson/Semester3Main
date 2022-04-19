// functions to handle requests to and from the mongo database via the server

// require and import statements
const express = require("express");

// define objects
const BinaryTree = require("../functions/BSTBalanced");
// router object
const mongoRoutes = express.Router();
// database object
const dbo = require("../db/mongoConn");

// get all the binary trees

mongoRoutes.route("/trees").get((req, res) => {
  let db_connect = dbo.getDb("binaryTrees");
  db_connect
    .collection("trees")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// add a new binary tree
mongoRoutes.route("/trees/add").post((req, res) => {
  let db_connect = dbo.getDb();
  let newTree = new BinaryTree.AVLTree();
  let numbers = [];
  console.log(req.body);
  numbers = req.body.value.split(",");

  numbers.forEach((number) => {
    newTree.insert(number);
  });
  db_connect.collection("trees").insertOne(newTree, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = mongoRoutes;
