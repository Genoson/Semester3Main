// event emitter practice
// also figured out how to require my own modules... keep doing this

const events = require("events");
const Queue = require("../../DataStructures/Week3/queue.js");

// an event emitter that will emit the messages stored in a queue in the order they were
// added to the queue, simulation of a message stream/ chat box. very simple

const eventEmitter = new events.EventEmitter();
const messageQueue = new Queue.Queue;

messageQueue.enqueue("Oh hi, Mark!");
messageQueue.enqueue("some more messages.");
messageQueue.enqueue("received in order.");
messageQueue.enqueue("From a queue.");
//console.log(messageQueue.toString());

let connectHandler = (messageQueue) => {
  console.log("connection established");
  eventEmitter.emit("data_received", messageQueue);
};

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", (messageQueue) => {
  console.log("data received successfully");
  while (!messageQueue.isEmpty()) {
    console.log(messageQueue.dequeue());
  }
});

eventEmitter.emit("connection", messageQueue);

console.log("program ended");

// Peters sample code

class MyEmitter extends events {}

const myEmitter = new MyEmitter();

myEmitter.on('example', () => console.log('example message 1'));
myEmitter.on('example', () => console.log('example message 2'));
myEmitter.on('example', () => console.log('example message 3'));

myEmitter.on('sample', () => console.log('message bound to sample'));

console.log('example count:' + myEmitter.listenerCount('example'));
console.log('sample count:' + myEmitter.listenerCount('sample'));

console.log(`event names: ` + myEmitter.eventNames());

myEmitter.emit('example');
myEmitter.emit('sample');

