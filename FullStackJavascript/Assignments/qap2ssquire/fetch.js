// the file fetching function, refactored into its own js file
// css file added to the fetchFile function as another case in the if statement

const fs = require("fs");
const event = require("./event.js");
const Q = require("./queue.js");

// initializing a Queue to hold the logs
const messageQueue = new Q.Queue();

// bringing the event emitter and related functions into this file
const serverEmitter = new event.MyEmitter();

serverEmitter.on("queue", (message) => {
  event.listen4QueueEvent(message, messageQueue);
});

serverEmitter.on("log", () => {
  event.listen4LogEvent(messageQueue);
})

const fetchFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page not found</h1>");
    } else if (res.statusCode === 418) {
      let message = `${res.statusCode} - Goblins are better than trolls`;
      serverEmitter.emit("queue", message);
      
      console.log(message);
    } else if (path.endsWith(".html")) {
      let message = `${res.statusCode} - HTML file was served`;
      //logger.messageStamp(message, messageQueue); // original method prior to refactor
      serverEmitter.emit("queue", message);
      //console.log(messageQueue.toString()); // testing remnant for future debugging
      console.log(message);
      //console.log(res.statusCode);
      res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    } else {
      let message = `${res.statusCode} - CSS file was served`;
      //logger.messageStamp(message, messageQueue);
      serverEmitter.emit("queue", message);
      //console.log(messageQueue.toString());
      console.log(message);
      res.writeHead(res.statusCode, { "Content-Type": "text/css" });
    }
    // this was the correct place to put the logger other iterations purged from code
    //logger.writeToFile(messageQueue);
    serverEmitter.emit("log", messageQueue);
    res.end(data);
    
  });
 
};

module.exports = {
  fetchFile,
};
