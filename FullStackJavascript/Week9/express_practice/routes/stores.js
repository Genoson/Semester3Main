const express = require("express");
const router = express.Router();
const { getStores, getStoresById } = require("../services/stores.dal.js");

//this is for the css and other public files
router.use(express.static("public"));

// router has put, post, get, delete, put, patch methods

router.get("/", async (req, res) => {
  // const stores = [
  //   {
  //     mgr_name: "Bilbo Baggins",
  //     email: "bbaggins@theshire.com",
  //     address: "234 long way",
  //     store_name: "big feet",
  //     city: "Shireville",
  //     country: "Canada",
  //     postal_code: "A3R5T2",
  //   },
  //   {
  //     mgr_name: "Gandalf",
  //     email: "gandalf@theshire.com",
  //     address: "35 fara way",
  //     store_name: "wizard",
  //     city: "Magicville",
  //     country: "Canada",
  //     postal_code: "A2G6Y4",
  //   },
  //   {
  //     mgr_name: "Frodo Baggins",
  //     email: "fbaggins@theshire.com",
  //     address: "49 long way",
  //     store_name: "restless",
  //     city: "Shireville",
  //     country: "Canada",
  //     postal_code: "A3R6E2",
  //   },
  // ];
  let stores = await getStores();
  res.render("stores", { stores });
});

router.get("/:id", async (req, res) => {
  let stores = await getStoresById(req.params.id);
  if (stores.length === 0) {
    res.status(404).render("norecord");
  } else {
  res.render("storesdetails", { stores });
    }
});

// router.put("/:id", async (req, res) => {
//   res.send("Update Store.");
// });

// router.post("/new", async (req, res) => {
//   res.send("New Store.");
// });

// router.delete("/:id", async (req, res) => {
//   res.send("Delete Store.");
// });

module.exports = router;
