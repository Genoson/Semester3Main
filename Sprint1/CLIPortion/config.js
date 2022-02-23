// the config command will call this function
// it will take the process.argv as a parameter

// import and requires statements will go here
const fs  = require('fs');
const fileSys = require('./fileSys');
//const logger = require('./logger');

// constants will go here, ie default values for files in the config file dependencies
//const myEmitter = logger.myEmitter;

// any sub functions unique to this file will go here
const editConfig = (key, value) => {
    let currentConfig = fileSys.makeConfigFile();
    currentConfig = JSON.parse(currentConfig);
    currentConfig[key] = value;
    currentConfig = JSON.stringify(currentConfig);
    fileSys.updateConfig(currentConfig);
    
}

//myEmitter.on("log", (msg, argv) => fileSys.makeLogFile(msg, argv));


// the main function will go here
// what information does the config file contain? 
//company name is all I currently need, thats clearly not it in a real world scenario but this project doesn't define anything else to be in it
// logger function will be called multiple times in this function, and most of them
const config = (argv) => {
    // config code - a switch statement and the outcomes of each case
    switch (argv[3]) {
        case '--show':
            // code to show the current config file
            let currentConfig = fileSys.makeConfigFile();
            currentConfig = JSON.parse(currentConfig);
            console.log(currentConfig);
            //logger.myEmitter.emit('log', 'current config file shown', argv);
            fileSys.makeLogFile('current config file shown', argv);
            break;
        case '--set':
            // code to set a new value for a key in the config file
            break;
        case '--reset':
        case '--help' || '-h' || 'help':
        
        default:
            // display a message that the command is not recognized and recommend the help command
            console.log('Command not recognized, please use --help for more information');
            break;
    }
}



//export the init function and any other functions that need to be used outside this file
module.exports = {
    config,
    editConfig,
}