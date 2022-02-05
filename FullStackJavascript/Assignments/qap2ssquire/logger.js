// a collection of functions to use in this project

// importing a queue to use to store the logs while feeding them to the logger
// an unnecessary step, but practice on adding complexity to the code
const Q = require("./queue.js");

// we will be writing files to disk so we need to import the fs module
const fs = require("fs");
const path = require("path");


// a function that receives the populated queue and writes it to a file

const writeToFile = async (queue) => {
    // we will write the logs to a file called logs.txt
    // to make the file unique, we will append the current date and time to the file name
    const timeStamp = new Date();
    const timeStampString = `${timeStamp.getFullYear()}${timeStamp.getMonth()+1}${timeStamp.getDate()}`;
    while (!queue.isEmpty()) {
        try {
            if (!fs.existsSync(path.join(__dirname, 'logs'))) {
                await fs.promises.mkdir(path.join(__dirname, 'logs'));
            }
        await fs.promises.appendFile(path.join(__dirname, 'logs', `logs_${timeStampString}.txt`), `${queue.dequeue()},\n`)
        } catch (err) {
        console.log(err);       
        }
    }
}


// simple test to see if the above function works as it should

// const test = new Q.Queue();
// test.enqueue("a");
// test.enqueue("b");
// test.enqueue("c");

// writeToFile(test);

// a function to embed the messages fed to the queue with a timestamp

const messageStamp = (message, queue) => {
    const timeStamp = new Date();
    //timeStamp simplified to year, month, day, hour, minute, second
    const timeStampString = `${timeStamp.getFullYear()}/${timeStamp.getMonth()}/${timeStamp.getDate()} ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}`;
    queue.enqueue(`${timeStampString} ${message}`);
}


module.exports = {
    writeToFile,
    messageStamp,
}
