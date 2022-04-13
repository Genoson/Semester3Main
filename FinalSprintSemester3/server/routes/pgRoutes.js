// functions to handle requests to and from the pg database via the server

const express = require('express');

// define objects
// router object
const pgRouter = express.Router();

// pg route functions to handle requests to and from the pg database via the server
// mongodb will host the user authentication, authorization, and registration (login/logout/signup)
// pg will host a clone of the extended mongo database information, 
//broken into multiple tables as opposed to a complex JSON object




module.exports = pgRouter;