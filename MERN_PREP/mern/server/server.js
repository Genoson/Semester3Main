// express server code for this demo/ tutorial of the mern stack
// https://www.mongodb.com/languages/mern-stack-tutorial
//^^ the tutorial can be found at the above address

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
//get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer((err) => {
    if (err) console.log(err);
  });
  console.log(`Connected to MongoDB on port ${port}`);
});
