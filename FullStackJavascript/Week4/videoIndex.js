const logEvents = require('./videoCode.js');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize the emitter
const myEmitter = new MyEmitter();

myEmitter.on('log', (message) => logEvents.logEvents(message));

setTimeout(() => {
    myEmitter.emit('log', 'event 1');
}, 2000);

