// this file will contain the code for file system operations
// will be referenced all over the place

// import and require statements will go here
const fs = require("fs");
const path = require("path");
const ourDates = require("./ourDates");
const uuid = require("uuid");
const logger = require("./logger");

// constants will go here, ie default values for files, error messages, etc.

// any sub functions and classes unique to this file will go here

const getHtml = () => {
  if (!fs.existsSync("./pages/index.html")) {
    console.log("index.html does not exist");
    if (!fs.existsSync("./pages")) {
      console.log("pages directory does not exist");
      fs.mkdirSync("./pages");
      console.log("pages directory created");
    }
    fs.writeFileSync(
      "./pages/index.html",
      "<!DOCTYPE html>" +
    '<html lang="en"><head>' +
    "<title>Sprint 1 Sem 3</title><style> body{background-color: aqua;}form{text-align: center;}</style>" +
    "</head><body>" +
    '<br><br><br><form action="/" method="POST"><label for="fname">First Name:</label><br><input type="text" id="fname" name="fname"><br>' +
    '<label for="lname">Last Name:</label><br><input type="text" id="lname" name="lname"><br>' +
    '<label for="id">Phone Number:</label><br> <input type="text" name = "id" id = "id"><br> ' +
    '<br><input type="submit" value="submit">' +
    "</body></html>"
      // `<!DOCTYPE html>
      // <html>
      //   <head>
      //     <title>Generate a user token</title>
      //     <meta charset="utf-8">
      //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
      //     <link rel="stylesheet" href="./index.css">
      //   </head>
      //   <body>
      //     <form action="/" method="POST">
      //       <input type="text" name="username" placeholder="username" /><input
      //         type="text"
      //         name="phoneNumber"
      //         placeholder="phoneNumber"
      //       /><input type="submit" value="submit" />
      //     </form>
      //   </body>
      // </html>`
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

const getHtmlPost = (token) => {
  if (!fs.existsSync("./pages/token.html")) {
    console.log("token.html does not exist");
    if (!fs.existsSync("./pages")) {
      console.log("pages directory does not exist");
      fs.mkdirSync("./pages");
      console.log("pages directory created");
    }
      //^^ replace above with a template literal that will be used to create the html file
    console.log("index.html created");
  } else {
    console.log("index.html exists");
  }
  fs.writeFileSync(
    "./pages/token.html",
    `<!DOCTYPE html>
    <html>
      <head>
        <title>View generated user token and validate user</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./index.css">
      </head>
      <body>
        <h1>Your token is: ${token}</h1>
        <h3>Your username is your first name and last name. <br>
        ie: ben collins username would be bencollins<br>
        username is case sensitive</h3>
        <form action="/" method="POST">
          <input type="text" name="userName" placeholder="username" /><input
            type="text"
            name="tokenConfirm"
            placeholder="tokenConfirm"
          /><input type="submit" value="submit" />
        </form>
      </body>
    </html>`
  );
  let data = fs.readFileSync("./pages/token.html");
  console.log("token.html read");
  return data;
};

// deeper down the rabbit hole
const getHtmlPostPost = (message) => {
  if (!fs.existsSync("./pages/confirm.html")) {
    console.log("confirm.html does not exist");
    if (!fs.existsSync("./pages")) {
      console.log("pages directory does not exist");
      fs.mkdirSync("./pages");
      console.log("pages directory created");
    }
      //^^ replace above with a template literal that will be used to create the html file
    console.log("confirm.html created");
  } else {
    console.log("confirm.html exists");
  }
  fs.writeFileSync(
    "./pages/confirm.html",
    `<!DOCTYPE html>
    <html>
      <head>
        <title>Token Confirmation</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./index.css">
      </head>
      <body>
        <h1>${message}</h1>  
      </body>
    </html>`
  );
  let data = fs.readFileSync("./pages/confirm.html");
  console.log("confirm.html read");
  return data;
};

// not used in the code provided by Kyle
const getCss = () => {
  if (!fs.existsSync("./pages/index.css")) {
    console.log("index.css does not exist");
    if (!fs.existsSync("./pages")) {
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
  } else {
    console.log("pages directory exists");
  }
  if (!fs.existsSync("./logs")) {
    console.log("logs directory does not exist");
    fs.mkdirSync("./logs");
    console.log("logs directory created");
  } else {
    console.log("logs directory exists");
  }
  if (!fs.existsSync("./app")) {
    console.log("app directory does not exist");
    fs.mkdirSync("./app");
    console.log("app directory created");
  } else {
    console.log("app directory exists");
  }
};

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
      '{ "company": "company",\n"phoneNumber": "5555555555",\n "email": "company@company.com",\n "name": "sprintAppTeam4",\n "version": "1.0.0",\n "description": "A CLI tool for token generation, storage, search, and verification",\n "main": "index.js",\n "superuser": "none",\n "database": "local JSON file" }'
      //^^ replace above with a template literal that will be used to create the config file
    );
    console.log("config.json created");
  } else {
    console.log("config.json exists");
  }
  let data = fs.readFileSync("./app/config.json");
  console.log("config.json read");

  return data;
};

// function to update the config file with the new values
const updateConfig = (json) => {
  fs.writeFileSync("./app/config.json", json);
  console.log("config.json updated");
};

//artifact from pre event based logging
const makeLogFile = (message, argv) => {
  let unique = uuid.v4();
  if (!fs.existsSync(`./logs/${ourDates.timeStampFile}-log.txt`)) {
    //console.log(`${ourDates.timeStampFile()}-log.txt does not exist`);
    if (!fs.existsSync("./logs")) {
      console.log("logs directory does not exist");
      fs.mkdirSync("./logs");
      console.log("logs directory created");
    }
    fs.appendFileSync(
      `./logs/${ourDates.timeStampFile()}-log.txt`,
      `${ourDates.timeStampFile()}\t${argv[2]} ${
        argv[3]
      }\t${message}\t${unique}\n`
    );
    if (debug) {
      console.log(`${ourDates.timeStampFile()}-log.txt created`);
    }
  }
};

// a function to save the JSON data of users and token to a JSON file
const saveJSON = (json) => {
  if(!fs.existsSync("./app/data.json")){
    console.log("data.json does not exist");
    if(!fs.existsSync("./app")){
      console.log("app directory does not exist");
      fs.mkdirSync("./app");
      console.log("app directory created");
    }
    fs.writeFileSync("./app/data.json", json);
    console.log("data.json created");
  }
  else{
    console.log("data.json exists");
    fs.writeFileSync("./app/data.json", json);
    console.log("data.json updated");
  }
}

// there is no main function to this file.
// it is instead a series of functions that will be called from other files

// exporting the functions in this file

module.exports = {
  getHtml,
  getCss,
  makeFileStructure,
  makeConfigFile,
  updateConfig,
  makeLogFile,
  saveJSON,
  getHtmlPost,
  getHtmlPostPost,
};
