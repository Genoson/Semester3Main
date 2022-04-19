// functions to handle requests to and from the pg database via the server

const express = require("express");
const pool = require("../db/pgConn");

// define objects
// router object
const pgRouter = express.Router();

// pg route functions to handle requests to and from the pg database via the server
// mongodb will host the user authentication, authorization, and registration (login/logout/signup)
// pg will host a set of sample data generated randomly of the same general format of the mongo database

const getBusiness = (search) => {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM mock_data WHERE business_name LIKE $1";
    pool.query(sql, [search], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

pgRouter.get("/search/postgres/:businessName", async (req, res) => {
  let results = await getBusiness(`%${req.params.businessName}%`);
  if (results.length === 0) {
    res.status(404).send("No results found");
    console.log("No results found");
  } else {
    res.json(results);
  }
});

module.exports = pgRouter;
