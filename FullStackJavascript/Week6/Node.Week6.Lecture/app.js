/*************************
 * File Name: app.js
 * Purpose: The main routines to start the initialization app
 * 
 * Commands:
app init all          creates the folder structure and config file
app init mk           creates the folder structure
app init cat          creates the config file with default settings
app config            displays a list of the current config settings
app config --reset    resets the config file with default settings
app config --set      sets a specific config setting

 *
 * Created Date: 09 Jan 2022
 * Authors:
 * PJR - Peter Rawsthorne
 * FF - Fred Flinstone
 * Revisions:
 * Date, Author, Description
 * 09 Jan 2022, PJR, File created
 * 16 Feb 2022, FF, enhanced..
 *
 *************************/
global.DEBUG = true;
const fs = require("fs");
const { initializeApp } = require('./init.js');

const myArgs = process.argv.slice(2);
if(DEBUG) if(myArgs.length > 1) console.log('the myapp.args: ', myArgs);

switch (myArgs[0]) {
    case 'init':
    case 'i':
        if(DEBUG) console.log(myArgs[0], ' - initialize the app.');
        initializeApp();
        break;
    case 'config':
    case 'c':
        if(DEBUG) console.log(myArgs[0], ' - display the configuration file');
        //configApp();
        break;
    case 'token':
    case 't':
        if(DEBUG) console.log(myArgs[0], ' - generate a user token');
        //tokenApp();
        break;  
    case 'help':
    case 'h':
    default:
        fs.readFile(__dirname + "/usage.txt", (error, data) => {
            if(error) throw error;
            console.log(data.toString());
        });
}

