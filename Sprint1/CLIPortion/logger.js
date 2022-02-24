// this will be the log function that generates the log files and adds them to the correct folder
// Perhaps have a log file for a few cases to seperate logs into more easily searchable files, not implemented



// import and require statements will go here
const fs = require('fs');
const EventEmitter = require("events").EventEmitter;
const fileSys = require('./fileSys');
const uuid = require('uuid');
const ourDates = require('./ourDates');


// constants will go here, ie default values for files, error messages, etc.
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// any sub functions unique to this file will go here

myEmitter.on("log", (message, argv) => {
    let unique = uuid.v4();
    if (!fs.existsSync(`./logs/${ourDates.timeStampFile}-log.txt`)) {
      //console.log(`${ourDates.timeStampFile()}-log.txt does not exist`);
      if (!fs.existsSync("./logs")) {
        console.log("logs directory does not exist");
        fs.mkdirSync("./logs");
        console.log("logs directory created");
      }
      fs.appendFileSync(
        `./logs/${ourDates.timeStampFile()}-log.txt`,
        `${ourDates.timeStampFile()}\t${argv[2]} ${
          argv[3]
        }\t${message}\t${unique}\n`
      );
      // if (debug) {
      //   console.log(`${ourDates.timeStampFile()}-log.txt created`);
      // }
    }
    });

// export the logger function and any other functions that need to be used outside this file
module.exports = {
    myEmitter,

}