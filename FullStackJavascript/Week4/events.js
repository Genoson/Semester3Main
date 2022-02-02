// event emitter practice
// also figured out how to require my own modules... keep doing this

const events = require("events");
const Queue = require("../../DataStructures/Week3/queue.js");

// an event emitter that will emit the messages stored in a queue in the order they were
// added to the queue, simulation of a message stream/ chat box

const eventEmitter = new events.EventEmitter();
const messageQueue = new Queue.Queue;

messageQueue.enqueue("Oh hi, Mark!");
messageQueue.enqueue("some more messages.");
messageQueue.enqueue("received in order.");
messageQueue.enqueue("From a queue.");
console.log(messageQueue.toString());

let connectHandler = (messageQueue) => {
  console.log("connection established");
  eventEmitter.emit("data_received", messageQueue);
};

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", (messageQueue) => {
  console.log("data received succesfully");
  while (!messageQueue.isEmpty()) {
    console.log(messageQueue.dequeue());
  }
});

eventEmitter.emit("connection", messageQueue);

console.log("program ended");
