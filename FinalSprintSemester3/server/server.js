// main program to execute the web server
// connects to both databases (mongodb and postgresql)

// require modules
const express = require("express");
require("dotenv").config({ path: "./config.env" });
const pgRouter = require("./routes/pgRoutes");
const mongoRouter = require("./routes/mongoRoutes");

const cors = require("cors");

// defining the app
const app = express();
app.use(cors());
app.use(express.json());
app.use(pgRouter);
app.use(mongoRouter);

// defining constants and variables and functions
const port = process.env.PORT || 5000;
const dbo = require("./db/mongoConn");

// listening to the port

app.listen(port, () => {
  // connecting to the mongodb database
  dbo.connectToServer((err) => {
    if (err) console.log(err);
  });
  console.log(`Connected to MongoDB on port ${port}`);
  // connecting to the postgresql database happens only as needed
  // Perhaps I'll add a test connection route to validate the postgres is working

});
