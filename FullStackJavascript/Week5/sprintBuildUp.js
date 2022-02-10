// code snippets directly related to the upcoming sprint project

// need to have a file that creates the UI elements
// this includes documentation and file structure

const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

if(fs.existsSync(path.join(__dirname, './filename'))) {
    fs.writeFile('./filename/newFile.txt', init, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('file created');
        }
    })
} else {
    fsPromises.mkdir(path.join(__dirname, './filename'), (err) => {
        if (err) {
            console.log(err);
        } else {
            fs.writeFile('./filename/newFile.txt', init, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('file created');
               
                }

            })

        }
    }
    )
}

// for json style files we create an object, then stringify it before saving it to a file




 // command line functionality to create tokens
 // kinda like a hashing algorythm

 // crc/crc32 is a hashing style algorythm that is used to create a unique token
 // ^^ often used in error checking
