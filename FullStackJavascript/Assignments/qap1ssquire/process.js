// notes on and practice code involving the process module of node

const process = require('process');

// process is an event object. An instance of the eventEmitter class.

// beforeExit event
// it can make asynchronous calls to exit the process.
// this allows more work to be scheduled prior ro exit, such as reporting a message.

// disconnect event
// it is emitted when the process is disconnected from the controlling terminal.

// exit event
// it is emitted when the process is exiting.
// either thru natural completion of calling process.exit() or through a call to process.exit(code).

// uncaughtException event
// it is emitted when an uncaught exception occurs.
// default action is to print a stack trace and exit with code

// streams are readable and writable streams.
// stdin is a readable stream
// stdout is writable. console.log() is a writable stream that writes to stdout.
// stderr is writable. it is blocking, ie code execution stops until it is resolved

// process contains many properties with information on the running process.

// process methods include:
// .exit - exits the process.
// .nextTick - schedules a callback to be called on the next tick of the event loop.
// .cwd - returns the current working directory.
// .chdir - changes the current working directory.

// and many more.

// process.argv - an array of the command line arguments.
// process.env - an object containing the user environment.
// process.execPath - the absolute pathname of the executable that started the process.
// process.execArgv - an array of the command line arguments used to start the process.
// process.version - the version of node.js.
// process.versions - an object containing the versions of node.js and npm.
// process.config - an object containing the configuration variables for node.js.
// process.arch - the architecture of the processor.
// process.platform - the operating system platform.
// process.memoryUsage - an object containing the current memory usage.
// process.uptime - the number of seconds the process has been running.
// process.hrtime - returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.


// the versions of node and more via process.versions

console.log(process.versions);


