// functions to handle requests to and from the mongo database via the server

// require and import statements
const express = require('express');
const mongoConn = require('./db/mongoConn');

const connectToServer = mongoConn.connectToServer;
const getDb = mongoConn.getDb;

// define objects
// router object
const mongoRouter = express.Router();
// database object
const dbo = require('../db/mongoConn');

// handling mongo object id
const ObjectId = require('mongodb').ObjectId;

//routes for specific requests to and from the mongo database

// routes for user authentication, authorization, and registration (login/logout/signup)



// routes for searching for records




module.exports = mongoRouter;

