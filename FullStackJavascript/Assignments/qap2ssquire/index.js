// QAP 2 Main executable file
// Stephen Squire
// use 1 more status code....

const http = require("http");

const Q = require("./queue.js");
const fetch = require("./fetch.js");
const event = require("./event.js");

// initializing a Queue to hold the logs
const messageQueue = new Q.Queue();

// bringing the event emitter and related functions into this file
const serverEmitter = new event.MyEmitter();

// defining the file system function to read the files
const fetchFile = fetch.fetchFile;

// defining the server
// style.css added to the cases of the switch statement
// this works because the <link> sends a request to the server
const server = http.createServer((req, res) => {
  let path = "./pages/";
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
    case "/pets":
      path += "pets.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      break;
    case "/goblins":
      // crashes if cache is deactivated
      res.statusCode = 301;
      res.setHeader("Location", "/secret", 'Set-Cookie', 'fullName=John Goblikon', 'location=Goblin Island');
      res.end();
      break;
    case "/secret":
      path += "secret.html";
      res.statusCode = 418;
      break;
    case "/style.css":
      path += "style.css";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fetchFile(path, res);
  
});

// launching the server
server.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
