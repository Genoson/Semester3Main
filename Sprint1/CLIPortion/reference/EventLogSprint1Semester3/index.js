// logging code provided by ashley, integrated into the main code base, kept for reference
const logEvents = require("./logEvents");

const EventEmitter = require("events").EventEmitter;

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
