/**
 * Root application file, run this file to start the application
 * Sprint 1 winter 2022 Team 4
 */

// This is where we will require and import all of our dependencies
const fs = require('fs');
const path = require('path');
const init = require('./init');
const config = require('./config');
const userToken = require('./userToken');

//and any other modules and js files we write. This project will be refactored

// Pete likes to have a global debug option for testing. 
// set this to true to see debug messages
global.debug = true;
const helpMessage = `You asked for help`;


// This is where our application will start.
// we will need to have our main switch statement here
// we use process.argv to get the command line arguments
// node index [command] [options]
//console.log(process.argv[2]) // this is the command
//console.log(process.argv[3]) // this is the first option
//console.log(process.argv[4]) // this is the second option, if any otherwise undefined, etc

// basic switch layout to build on top of

switch (process.argv[2]) {
    case 'init':
        // call the function to run the init command and pass it the process.argv
        init.init(process.argv);
        break;
    case 'config':
        // call the function to run the config command and pass it the process.argv
        config.config(process.argv);
        break;
    case 'token':
        // call the function to run the token command and pass it the process.argv
        // we might run token as a separate cli app
        userToken.userToken(`"${process.argv[3]}"`, process.argv[4]);
        break;
    case 'search':
        // call the function to run the search command and pass it the process.argv
        // we might run search as a seperate cli app
    case 'help' || '--help' || '-h':
        if (debug) {console.log(helpMessage);}
        // call the function to run the help command and pass it the process.argv
        //^^ or hard code a display of the help text
    default:
        // display a message that the command is not recognized and recommend the help command

}

