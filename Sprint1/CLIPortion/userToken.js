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


// the main function will go here

const userToken = (userName, phoneNumber) => {
    // the userToken code will go here
    let user = new User(userName, phoneNumber);
    console.log(`${user.userName} has been created `);
    // call the function that will write the user object to the json file here
}


// export the userToken function and any other functions that need to be used outside this file
module.exports = {
    userToken,
    User,
}