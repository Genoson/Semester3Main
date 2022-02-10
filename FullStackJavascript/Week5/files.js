//  class code about files

// easiest way to read json file
// require('./files.json')  but creates a cached version that doesn't update 
//so only sometimes useful
// this is also a sync method so it will block code execution until it is done
// best used for config files required at the start of the program

// to access JSON files in a more useful way we use the fs module

const fs = require('fs');

let package = fs.readFileSync('./package.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
    try {
        data = JSON.parse(data);
       
        
    } catch (err) {
        console.log('error parsing json', err);
    }
    }
 });

package = JSON.parse(package);
 console.log(package.name);


