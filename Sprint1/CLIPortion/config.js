// the config command will call this function
// it will take the process.argv as a parameter

// import and requires statements will go here
const fs = require("fs");
const fileSys = require("./fileSys");
const logger = require('./logger');

// constants will go here, ie default values for files in the config file dependencies
//const myEmitter = logger.myEmitter;

// any sub functions unique to this file will go here
const editConfig = (key, value) => {
  let currentConfig = fileSys.makeConfigFile();
  currentConfig = JSON.parse(currentConfig);
  currentConfig[key] = value;
  currentConfig = JSON.stringify(currentConfig);
  fileSys.updateConfig(currentConfig);
};

//myEmitter.on("log", (msg, argv) => fileSys.makeLogFile(msg, argv));

// the main function will go here
// logger function will be called multiple times in this function, and most of them
const config = (argv) => {
  // config code - a switch statement and the outcomes of each case
  switch (argv[3]) {
    case "--show":
      // code to show the current config file
      let currentConfig = fileSys.makeConfigFile();
      currentConfig = JSON.parse(currentConfig);
      console.log(currentConfig);
      logger.myEmitter.emit('log', 'current config file shown', argv);
      //fileSys.makeLogFile("current config file shown", argv);
      break;
    case "--set":
      // code to set a new value for a key in the config file
      editConfig(argv[4], argv[5]);
      //fileSys.makeLogFile("config file edit complete", argv);
      logger.myEmitter.emit('log', 'config file edit complete', argv);
      break;
    case "--reset":
      // code to reset the config file to the default values
      if (fs.existsSync("./app/config.json")) {
        fs.unlinkSync("./app/config.json");
      }
      fileSys.makeConfigFile();
      //fileSys.makeLogFile("current config file reset", argv);
      logger.myEmitter.emit('log', 'config file reset', argv);
      break;
    case "--help":
      // code to run the help command and display the help text
      console.log(helpMessage);
      break;
    case "-h":
      // code to run the help command and display the help text
      console.log(helpMessage);
      break;
    case "help":
      // code to run the help command and display the help text
      console.log(helpMessage);
      break;

    default:
      // display a message that the command is not recognized and recommend the help command
      console.log(
        "Command not recognized, please use --help for more information"
      );
      break;
  }
};

//export the init function and any other functions that need to be used outside this file
module.exports = {
  config,
  editConfig,
};
