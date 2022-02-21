// a web server that serves up the index.html file for the basic UI
// hosts a form that will submit a POST request to the server

// required imports and require statements will go here
const fs = require("fs");
const path = require("path");
const http = require("http");
const fileSys = require("./fileSys");

// constants will go here, ie default values for files, error messages, etc.


// any sub functions and classes unique to this file will go here
// refactor the below into a function call from the fileSystem file
const htmlFile = fileSys.getHtml();
const cssFile = fileSys.getCss();


// the web server will go here
const server = http.createServer((req, res) => {
    // web server code and switch statement will go here
    switch (req.url) {
        case "/":
            // code to serve up the index.html file
            break;
        // there are more cases to add here
        default:
            // code to serve up the 404.html file
            break;
    }
   
});