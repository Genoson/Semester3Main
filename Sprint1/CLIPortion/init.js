// the init command will call this function
// it will take the process.argv as a parameter

// import and requires statements will go here
const fs  = require('fs');
const fileSys = require('./fileSys');
// constants will go here, ie default values for files in the init file dependencies


// any sub functions unique to this file will go here


// the main function will go here
// logger function will be called multiple times in this function, and most of them
const init = (argv) => {
    // init code - a switch statement and the outcomes of each case
    switch (argv[3]) {
        case '--all':
            // code to run all the commands, build the file structure and the default config file
            fileSys.makeFileStructure();
            fileSys.makeConfigFile();
            break;
        case '--mk':
            // code to run the mk command and build the file structure
            //console.log('mk command should run here');
            fileSys.makeFileStructure();
            break;
        case '--cat':
            // code to run the cat command and make the config file
            console.log('cat command should run here');
            fileSys.makeConfigFile();
           
            break;
        case '--help' || '-h' || 'help':
            // code to run the help command and display the help text
            break;
        default:
            // display a message that the command is not recognized and recommend the help command
            console.log('Command not recognized, please use --help for more information');
            break;
    }
}



//export the init function and any other functions that need to be used outside this file
module.exports = {
    init,
}