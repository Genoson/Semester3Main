// starting to code along the app with Peter
// his repository hasn't been updated recently

const express = require("express");
const app = express();
const storesRouter = require("./routes/stores");

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.set("view engine", "ejs");

// app.get('/', async (req, res) => {
//     res.render('index');

// moved to a router
// app.get('/stores', (req, res) => {
//   const stores = [
//     {
//       mgr_name: "Bilbo Baggins",
//       email: "bbaggins@theshire.com",
//       address: "234 long way",
//       store_name: "big feet",
//       city: "Shireville",
//       country: "Canada",
//       postal_code: "A3R5T2",
//     },
//     {
//       mgr_name: "Gandalf",
//       email: "gandalf@theshire.com",
//       address: "35 fara way",
//       store_name: "wizard",
//       city: "Magicville",
//       country: "Canada",
//       postal_code: "A2G6Y4",
//     },
//     {
//       mgr_name: "Frodo Baggins",
//       email: "fbaggins@theshire.com",
//       address: "49 long way",
//       store_name: "restless",
//       city: "Shireville",
//       country: "Canada",
//       postal_code: "A3R6E2",
//     },
//   ];
//   res.render("index", { stores });
// });

app.use("/stores", storesRouter);

app.use((req, res) => {
    res.status(404).render("404");
})