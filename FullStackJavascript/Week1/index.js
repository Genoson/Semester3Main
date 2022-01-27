const http = require("http");
const fs = require("fs");

//The same process is done below three times. text, then raw html, then an html file and a json file.

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("A test message");
    res.end();
  })
  .listen(3000);

serveText("A test message");

function serveText(theText) {
  http
    .createServer((req, res) => {
      console.log("Request received");
      console.log(req.method);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(theText);
      res.end();
    })
    .listen(3000);
}

serveHtml("<h1>Hello World</h1>");

function serveHtml(theHtml) {
  http
    .createServer((req, res) => {
      console.log("Request received");
      // console.log(req.method);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(theHtml);
      res.end();
    })
    .listen(3000);
}

serveFile("first.html");

function serveFile(theFile) {
  http
    .createServer((req, res) => {
      console.log("Request received");
      // console.log(req.method);
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
}

serveJson("package.json");

function serveJson(theJson) {
  http
    .createServer((req, res) => {
      fs.readFile(theJson, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404);
          res.write("File not found");
        } else {
          console.log(`File ${theJson} was read`);
          res.write(data);
        }
        res.end();
      });
    })
    .listen(3000);
}
