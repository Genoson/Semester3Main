// this file will contain the code for file system operations
// will be referenced all over the place

// import and require statements will go here
const fs = require('fs');
const path = require('path');
const ourDates = require('./ourDates');


// constants will go here, ie default values for files, error messages, etc.


// any sub functions and classes unique to this file will go here

const getHtml = () => {
    if (!fs.existsSync("./pages/index.html")) {
      console.log("index.html does not exist");
      if (!path.existsSync("./pages")) {
        console.log("pages directory does not exist");
        fs.mkdirSync("./pages");
        console.log("pages directory created");
      }
      fs.writeFileSync(
        "./pages/index.html",
        '<!DOCTYPE html><html><head><title>index</title></head><body><form action="/" method="POST"><input type="text" name="username" placeholder="username"><input type="text" name="phoneNumber" placeholder="phoneNumber"><input type="text" name="email" placeholder="email"><input type="submit" value="submit"></form></body></html>'
        //^^ replace above with a template literal that will be used to create the html file
      );
      console.log("index.html created");
    } else {
      console.log("index.html exists");
    }
    let data = fs.readFileSync("./pages/index.html");
    console.log("index.html read");
    return data;
  };

const getCss = () => {
    if (!fs.existsSync("./pages/index.css")) {
      console.log("index.css does not exist");
      if (!path.existsSync("./pages")) {
        console.log("pages directory does not exist");
        fs.mkdirSync("./pages");
        console.log("pages directory created");
      }
      fs.writeFileSync(
        "./pages/index.css",
        'body {background-color: #f0f0f0; font-family: sans-serif;}form {width: 300px; margin: 0 auto; padding: 1em;}input[type="text"] {width: 100%;}input[type="submit"] {width: 100%;}'
        //^^ replace above with a template literal that will be used to create the css file
      );
      console.log("index.css created");
    } else {
      console.log("index.css exists");
    }
    let data = fs.readFileSync("./pages/index.css");
    console.log("index.css read");
    return data;
  };

//the function to make the file structure via the command like mk call
const makeFileStructure = () => {
  if (!fs.existsSync("./pages")) {
    console.log("pages directory does not exist");
    fs.mkdirSync("./pages");
    console.log("pages directory created");
  } else {console.log ("pages directory exists");}
  if (!fs.existsSync("./logs")){
    console.log("logs directory does not exist");
    fs.mkdirSync("./logs");
    console.log("logs directory created");
  } else {console.log ("logs directory exists");}
  if(!fs.existsSync('./app')) {
    console.log("app directory does not exist");
    fs.mkdirSync('./app');
    console.log("app directory created");
  } else {console.log("app directory exists");}
}

//the function to make the config file via the command line cat call 
const makeConfigFile = () => {
  if (!fs.existsSync("./app/config.json")) {
    console.log("config.json does not exist");
    if (!fs.existsSync("./app")) {
      console.log("app directory does not exist");
      fs.mkdirSync("./app");
      console.log("app directory created");
    }
    fs.writeFileSync(
      "./app/config.json",
      '{ "company": "company", "phoneNumber": "", "email": ""}'
      //^^ replace above with a template literal that will be used to create the config file
    );
    console.log("config.json created");
  } else {
    console.log("config.json exists");
  }
  let data = fs.readFileSync("./app/config.json");
  console.log("config.json read");
  return data;
}

// function to update the config file with the new values
const updateConfig = (json) => {
  fs.writeFileSync("./app/config.json", json);
  console.log("config.json updated");
}

// there is no main function to this file.
// it is instead a series of functions that will be called from other files

// exporting the functions in this file

module.exports = {
    getHtml,
    getCss,
    makeFileStructure,
    makeConfigFile,
    updateConfig
}