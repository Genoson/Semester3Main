/**
 * Root application file, run this file to start the application
 * Sprint 1 winter 2022 Team 4
 */

// This is where we will require and import all of our dependencies
// const fs = require('fs');
// const path = require('path');
const init = require('./init');
const config = require('./config');
const userToken = require('./userToken');
const Search = require('./search');
const DoubleLinked = require('./doubleLinked');


//and any other modules and js files we write. This project will be refactored

// Pete likes to have a global debug option for testing. 
// set this to true to see debug messages
global.debug = false;
global.helpMessage = `
    Usage: node index [command] [options] [arguments]
    Commands:
        help or -h or --help: Displays this help message
        init - initializes the application
        init options:
            --all - initializes the application with all the data structures and files
            --mk - initializes the application with the file folder structure
            --cat - initializes the application with the config file
            --help - displays this help message
        
        config - displays or update the config file
        config options: 
            --show - displays the config file
            --set - updates the config file
                 takes two arguments: [key] [value]
            --reset - resets the config file to the default values
            --help - displays this help message   
        
        token - displays or update the user tokens   
        token options:
            --create - creates a new user token
                  takes two arguments: [userName] [phoneNumber]
            --get - displays the user token 
                  takes two arguments: [getType][getValue]]
                  getType can be: name, phone, email
                  getValue must be exact, use search to find correct information if unknown
            --confirm - confirms the user token
                    takes two arguments: [userName] [token]
            --clean - removes expired tokens
            --help - displays this help message
        
        search - searches for user details
        search options:
            --name - searches for a user by name
                  takes one argument: [userName(partial)]
            --phone - searches for a user by phone number
                  takes one argument: [phoneNumber(partial)]
            --email - searches for a user by email
                  takes one argument: [email(partial)]
            --help - displays this help message`;
// let linkedList = DoubleLinked.testList;
let linkedList = DoubleLinked.fillLinkedList();
//console.log(linkedList);


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
        userToken.cliToken(process.argv, linkedList);
        break;
    case 'search':
        // call the function to run the search command and pass it the process.argv
        // we might run search as a seperate cli app
        Search.cliSearch(process.argv, linkedList);
        break;
    case 'help':
        // call the function to run the help command and pass it the process.argv
        //^^ or hard code a display of the help text
        console.log(helpMessage);
        break;
    case '-h':
        // call the function to run the help command and pass it the process.argv
        //^^ or hard code a display of the help text
        console.log(helpMessage);
        break;
    case '--help':
        // call the function to run the help command and pass it the process.argv
        //^^ or hard code a display of the help text
        console.log(helpMessage);
        break;
    default:
        // display a message that the command is not recognized and recommend the help command
        console.log(`Command ${process.argv[2]} is not recognized. Please use the help command to see a list of commands.`);

}

