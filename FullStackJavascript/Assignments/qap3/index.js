// Main executable for this qap3 assignment
// Stephen Squire
// March 19, 2022

// require and import statements

const express = require("express");
const app = express();
const returnsRouter = require("./routes/getReturns");
const revenueRouter = require("./routes/getRevenue");


// initializing the express app

app.use(express.static("./public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.set("view engine", "ejs");

app.use("/", returnsRouter);
app.use("/", revenueRouter);


