// this will contain the event functions for the QAP2

const events = require("events");
const fs = require("fs");
const logger = require("./logger.js");
class MyEmitter extends events.EventEmitter {}

// this listens for an event to queue a message
const listen4QueueEvent = (message, queue) => {
  logger.messageStamp(message, queue);
  console.log("message sent to queue successfully");
};

// this listens for an event to write the queue to the log file
const listen4LogEvent = (queue) => {
  logger.writeToFile(queue);
  console.log("message queue logged successfully");
};

const listen4Goblins = () => {
    // something to do with something else?
    // unused code, maybe i should visit the /goblins page
};


module.exports = {
  
  listen4QueueEvent,
  listen4Goblins,
  listen4LogEvent,
  MyEmitter,
};
