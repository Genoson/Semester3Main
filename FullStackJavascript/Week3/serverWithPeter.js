// example code today with server from class

const http = require("http");
const fs = require("fs");

// setting up a toggleable debug tool for console messages
// ability to turn off console messages for builds pushed to clients 
// and turn them on for development and testing
global.DEBUG = true;

const fetchFile = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>404 Page not found</h1>");
        } else {
          console.log("file was served");
          res.writeHead(res.statusCode, { "Content-Type": "text/html" });
          res.end(data);
        }
    });
}


//embedded text
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     // write a response to the client
//     res.setHeader('Content-Type', 'text/html');
//     //res.write('<h1>Hello World</h1>');
//     //res.end();
//     // res.end(); can take a parameter, which is the response negating the need for a res.write()
//     /res.end('<h1>Hello World</h1>');
// });

// sending a file instead of text

const server = http.createServer((req, res) => {
  let path = "./views/";
  console.log(req.url, req.method);
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/kittens":
      path += "kittens.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case '/set-cookies':
        res.setHeader('Set-Cookie', 'fullName=Somebody Else');
        res.end('<h1>Cookies set</h1>');
        break;
    default:
      res.statusCode = 404;
      path += "404.html";
      break;
  }
 fetchFile(path, res);

});


server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});

// sequence diagrams
// the idea of a sequence diagram is to show the flow of data through a system
// the sequence diagram is a sequence of events that happen in a system
//RUP - rational unified process
// simple example:
// client -> server -> client

// we will shift gears into using express once we have a good grasp on these basics
