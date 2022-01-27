// npm package test code for QAP 1
// Stephen Squire
// January 20, 2022

// import/ require statements at start of file

const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const moment = require("moment");

// writing a simple http server function that reads a file and sends it to the client

const serveFile = (theFile) => {
  http
    .createServer((req, res) => {
      console.log("Request received");
      console.log(req.method);
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile(theFile, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404);
          res.write("File not found");
        } else {
          console.log(`File ${theFile}was read`);
          res.write(data);
        }
        res.end();
      });
    })
    .listen(3000);
};

// writing a simple html file to serve to the client

fs.writeFile("first.html", "<h1>Hello World</h1>", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// testing this basic http server function
//serveFile('first.html');
// in terminal the command nodemon npm.js will start the server using the nodemon package

// using the lodash library to generate random numbers

let randNum = _.random(1, 100);
let randNum2 = _.random(1, 100);

let message = `These two random numbers were generated using the lodash library: ${randNum} and ${randNum2}`;

// appending the message to the first.html file
fs.appendFile("first.html", `<h2>${message}</h2>`, (err) => {
  if (err) throw err;
  console.log("The message has been appended to the file!");
});

// testing this updated message
//serveFile('first.html');
// in terminal the command nodemon npm.js will start the server using the nodemon package

// using the moment library to generate a date
let date = moment().format("MMMM Do YYYY, h:mm:ss a");
//console.log(date);
// moment library format options:
// https://momentjs.com/docs/#/displaying/format/
// this page has all the methods of the moment library in it, just links to the section that the formats are discussed
let dateDifferentFormat = moment().format("MMM DD, YY");
//console.log(dateDifferentFormat);
let dateMilliseconds = moment().format("x");
//console.log(dateMilliseconds);
// the milliseconds time is not useful for a human to read,
// but great for computational time needs and timing of function runtime etc.

let messageSecond = `The date and time is: ${date}`;
let messageThird = `The date in a different format is: ${dateDifferentFormat}`;

fs.appendFile("first.html", `<h2>${messageSecond}</h2>`, (err) => {
  if (err) throw err;
  console.log("The date has been appended to the file!");
});

fs.appendFile("first.html", `<h2>${messageThird}</h2>`, (err) => {
  if (err) throw err;
  console.log("The date has been appended to the file!");
});

// testing this updated message
serveFile('first.html');
// in terminal the command nodemon npm.js will start the server using the nodemon package

// Because this file is set up entirely asynchronously the messages append to the file in order of execution,
// rather than the order of the code.
