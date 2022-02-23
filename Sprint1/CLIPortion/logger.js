// this will be the log function that generates the log files and adds them to the correct folder
// Perhaps have a log file for a few cases to seperate logs into more easily searchable files
// currently not operating via events just calling the function that writes the log file


// import and require statements will go here
const fs = require('fs');
const EventEmitter = require("events").EventEmitter;
const fileSys = require('./fileSys');


// constants will go here, ie default values for files, error messages, etc.
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// const logEvent = fileSys.makeLogFile();


// any sub functions unique to this file will go here
// myEmitter.on("log", (msg, argv) => logEvent(msg, argv));


// the main function will go here
// unsure of exact parameters for this function at the moment
// const logEvents = (msg, argv) => {
//     // the logger code will go here
//     // rubric says  a specific format should be used. I can't find it, ask Pete if we all can't find it
//     fileSys.makeLogFile(msg, argv);
//     if (debug) {console.log(msg);}
// }


// export the logger function and any other functions that need to be used outside this file
module.exports = {
    myEmitter,
    // logEvent,
}