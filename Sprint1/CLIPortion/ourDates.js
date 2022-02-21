// a module for our date handling and timestamp functions

// import and require statements will go here


// constants will go here, ie default values for files, error messages, etc.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const today = new Date();

// any sub functions unique to this file will go here

const timeStamp = () => {
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let milli = today.getTime();
    let timeStamp = `${date}-${month}-${year}-${milli}`;
    return timeStamp;
}

const timeStampFile = () => {
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let fileTimeStamp = `${date}-${month}-${year}`;
    return fileTimeStamp;
}

const createDate = () => {
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let createDate = `${date}-${month}-${year} ${hour}:${minute}:${second}`;
    return createDate;
}

const expireDate = () => {
    //expires 3 days from today
    let expireDate = new Date(today.getTime() + 259200000); // 3 days in milliseconds added to current time
    let date = expireDate.getDate();
    let month = months[expireDate.getMonth()];
    let year = expireDate.getFullYear();
    let hour = expireDate.getHours();
    let minute = expireDate.getMinutes();
    let second = expireDate.getSeconds();
    let expireDateStr = `${date}-${month}-${year} ${hour}:${minute}:${second}`;
    return expireDateStr;
}



//console.log(timeStamp());
//console.log(timeStampFile());
// this file is all subfunctions and will not be called directly so it has no main function

module.exports = {
    timeStamp,
    timeStampFile,
    createDate,
    expireDate,
}