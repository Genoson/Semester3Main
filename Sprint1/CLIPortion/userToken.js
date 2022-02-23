// userToken creating and associated functions go here
// possibly refactored into a folder with several files

// import and require statements will go here
const fs = require('fs');
const crc32 = require('crc/crc32');
const ourDates = require('./ourDates');
const fileSys = require('./fileSys');


// constants will go here, ie default values for files, error messages, etc.
let configData = fileSys.makeConfigFile();
configData = JSON.parse(configData);
const company = configData.company; //  pull from the config json file in a perfect world

// any sub functions unique to this file will go here
class User {
    constructor(userName, phoneNumber) {
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.email = `${userName}@${company}.com`;
        this.token = crc32(userName);
        this.created = ourDates.createDate();
        this.expires = ourDates.expireDate();
        this.confirmed = false;
    }
}


const userToken = (userName, phoneNumber, linkedList) => {
    // the userToken code will go here
    let user = new User(userName, phoneNumber);
    console.log(`${user.userName} has been created `);
    // placing the new user inside the linked list
    linkedList.insertionSorted(user);
    //console.log(linkedList);
    // writing the linked list to the file
    let temp = linkedList.JSONify();
    fileSys.saveJSON(JSON.stringify(temp));


}


// the main function will go here

const cliToken = (argv, linkedList) => {
    // cliToken code will go here
    switch (argv[3]) {
        case '--create':
            // code to run the create command and create a user token
            userToken(argv[4], argv[5], linkedList);
            break;
        case '--get':
            // code to run the get command and display the user token
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



// export the userToken function and any other functions that need to be used outside this file
module.exports = {
    userToken,
    User,
    cliToken,
}