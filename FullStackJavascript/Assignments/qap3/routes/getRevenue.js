// functions to retrieve dvd rental revenue date for story 3 of the qap3

// imports and requires

const express = require("express");
const router = express.Router();
const { getRevenueDvds } = require("../services/revenue.dal.js");

// define public folder

router.use(express.static("public"));

// router get functions will go here

// The below wasn't required in both the getRevenue and getReturns routes 
// router.get("/", async (req, res) => {
//   res.render("home");
// });

router.get("/rev:id", async (req, res) => {
  let revenueDvds = await getRevenueDvds(req.params.id);
  // console.log(revenueDvds);
  if (revenueDvds.length > 0) res.render("revenue.ejs", { revenueDvds });
  else res.render("404");
});

// replaced the two functions with one parameter based function
// router.get("/Rev2", async (req, res) => {

//     let revenueDvds = await getRevenueDvds(2);
//   // console.log(revenueDvds);
//   if (revenueDvds.length > 0) res.render("revenue.ejs", { revenueDvds });
//   else res.render("404");
// });

// stretch goal routers will go here, time allowing

module.exports = router;
