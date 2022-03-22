// main route for this app

// imports and requires

const express = require("express");
const router = express.Router();
const { getUnreturnedDvds, getUnreturnedDvdsByCustomer } = require("../services/return.dal.js");

// define public folder

router.use(express.static("public"));

// router get functions will go here

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/ret:id", async (req, res) => {
  let unreturnedDvds = await getUnreturnedDvds(req.params.id);
  //console.log(unreturnedDvds);
  if (unreturnedDvds.length > 0) res.render("unreturned.ejs", { unreturnedDvds });
  else res.render("404");
});

// replaced the two functions with one parameter based function

// router.get("/2", async (req, res) => {
//   let unreturnedDvds = await getUnreturnedDvds(2);
//   res.render("unreturned", { unreturnedDvds });
// });

// stretch goal routers will go here, time allowing

router.get("/cust:customer_name", async (req, res) => {
  customer_name = req.params.customer_name.replace("%20", " ");
  console.log(customer_name);
  let unreturnedDvds = await getUnreturnedDvdsByCustomer(customer_name);
  //console.log(unreturnedDvds);
  if (unreturnedDvds.length > 0) res.render("unreturned.ejs", { unreturnedDvds });
  else res.render("404");
});

module.exports = router;
