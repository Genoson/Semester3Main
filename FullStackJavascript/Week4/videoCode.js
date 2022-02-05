// code from a video tutorial on logging using an event listener

// npm modules to use, may substitute for other libraries
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
 const fsPromises = require('fs').promises;
 const path = require('path');

 const logEvents = async (message) => {
     // if using a different library for formatting the date, change here too
     const dateTime = `${format(new Date(), 'MM/dd/yyyy\thh:mm:ss')}`;
     const logItem = `${dateTime}\t${uuid()}\t${message}`;
     console.log(logItem);
     try {
        //  if (!fs.existsSync('./logs')) {
        //      fs.mkdirSync('./logs');
        //  } // my way is less robust to delay in communication
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs',  'eventLog.txt'), `${logItem},\n`);
     } catch (err) {
         console.log(err);
     }
 }

 console.log(format(new Date(), 'MM/dd/yyyy\thh:mm:ss'));

 console.log(uuid());


 module.exports = {
        logEvents
 }