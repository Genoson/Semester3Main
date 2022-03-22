const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const { getStores, getStoreById } = require("../services/stores.dal");

router.get("/", async (req, res) => {
  let stores = await getStores();
  if (stores.length > 0) res.render("stores.ejs", { stores });
  else res.render("norecord");
});

router.get("/:id", async (req, res) => {
  let store = await getStoreById(req.params.id);
  console.log(store);
  if (store.length > 0) res.render("storedetails.ejs", { store });
  else res.render("norecord");
});

module.exports = router;
