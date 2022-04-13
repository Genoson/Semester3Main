// main program to execute the web server
// connects to both databases (mongodb and postgresql)

// require modules
const express = require('express');
require ('dotenv').config({ path: './config.env' });
const pgRouter = require('./routes/pgRoutes');
const mongoRouter = require('./routes/mongoRoutes');

// defining functions
const app = express();


// defining constants
const port = process.env.PORT || 5000;





