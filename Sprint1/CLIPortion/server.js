// a web server that serves up the index.html file for the basic UI
// hosts a form that will submit a POST request to the server

// required imports and require statements will go here
const fs = require("fs");
const path = require("path");
const http = require("http");
const fileSys = require("./fileSys");
const { parse } = require("querystring");
const userToken = require("./userToken");
const doubleLinked = require("./doubleLinked");
const logger = require("./logger");

// constants will go here, ie default values for files, error messages, etc.
global.authenticate = false; // used in place of a switch or if statement in the POST request chain to authenticate a user
const linkedList = doubleLinked.fillLinkedList();

// any sub functions and classes unique to this file will go here

const htmlFile = fileSys.getHtml();

const cssFile = fileSys.getCss(); // no longer used in current implementation

const server = http
  .createServer(function (req, res) {
    if (req.method === "POST") {
      // code to run when a POST request is received
      //console.log("POST request received");
      if (authenticate === false) {
        if (
          req.headers["content-type"] === "application/x-www-form-urlencoded"
        ) {
          // code to run when the content-type is application/x-www-form-urlencoded
          // get data from the request
          let data = "";
          req.on("data", (chunk) => {
            data += chunk.toString();
          });
          req.on("end", () => {
            let parsedData = parse(data, "&", "=");
            console.log(parsedData);
            console.log(parsedData.fname);
            console.log(parsedData.id);
            // create a user token
            userToken.userToken(
              `${parsedData.fname}${parsedData.lname}`,
              parsedData.id,
              linkedList
            );
            var token = linkedList.getTokenName(
              `${parsedData.fname}${parsedData.lname}`
            );
            fileSys.getHtmlPost(token);
            console.log(
              linkedList.getTokenName(`${parsedData.fname}${parsedData.lname}`)
            );
            // logging the user token creation

            logger.myEmitter.emit(
              "log",
              "user token created by POST request",
              (argv = [null, null, "website", "user generation"])
            );
            res.writeHead(200, { "Content-Type": "text/html" });
            let html = fs.readFileSync("./pages/token.html");
            global.authenticate = true;
            res.end(html);
          });
        }
      } else {
        // this is a very rough way to handle this case. A proper website would work better
        if (
          req.headers["content-type"] === "application/x-www-form-urlencoded"
        ) {
          let data = "";
          req.on("data", (chunk) => {
            data += chunk.toString();
          });
          req.on("end", () => {
            let parsedData = parse(data, "&", "=");
            console.log(parsedData);
            let confirmed = linkedList.confirmToken(
              parsedData.userName,
              parsedData.tokenConfirm
            );
            let temp = linkedList.JSONify();
            fileSys.saveJSON(JSON.stringify(temp));
            if (confirmed === true) {
              // the case of success
              fileSys.getHtmlPostPost("Token successfully confirmed");
              logger.myEmitter.emit(
                "log",
                "user token confirmed by POST request",
                (argv = [null, null, "website", "user confirmed"])
              );
            } else {
              // the case of failure
              fileSys.getHtmlPostPost("Token failed to confirm");
              logger.myEmitter.emit(
                "log",
                "user token failed to confirm by POST request",
                (argv = [null, null, "website", "user not confirmed"])
              );
            }
            global.authenticate = false;

            res.writeHead(200, { "Content-Type": "text/html" });
            let html = fs.readFileSync("./pages/confirm.html");
            res.end(html);
          });
        }
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(htmlFile);
    }
  })
  .listen(3000);

// the web server will go here, the below was my temporary web server prior to integrating Kyles solution above
// const server = http.createServer((req, res) => {
//   // web server code and switch statement will go here
//   if (req.method === "POST") {
//     // code to run when a POST request is received
//     //console.log("POST request received");
//     //switch statement to determine which POST request was received
//     switch (req.url) {
//       case "/":
//         // code to run when the root url is
//         if (
//           req.headers["content-type"] === "application/x-www-form-urlencoded"
//         ) {
//           // code to run when the content-type is application/x-www-form-urlencoded
//           // get data from the request
//           let data = "";
//           req.on("data", (chunk) => {
//             data += chunk.toString();
//           });
//           req.on("end", () => {
//             let parsedData = parse(data, "&", "=");
//             console.log(parsedData);
//             console.log(parsedData.username);
//             console.log(parsedData.phoneNumber);
//             // create a user token
//             userToken.userToken(
//               parsedData.username,
//               parsedData.phoneNumber,
//               linkedList
//             );
//             console.log(linkedList.getTokenName(parsedData.username));
//           });
//           res.end("ok");
//         }
//     }
//   } else {
//     switch (req.url) {
//       case "/":
//         // code to serve up the index.html file
//         //console.log("index.html served");
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(htmlFile);
//         res.end();
//         break;
//       // there are more cases to add here
//       case "/index.css":
//         // code to serve up the style.css file
//         //console.log("style.css served");
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.write(cssFile);
//         res.end();
//       default:
//         // code to serve up the 404.html file
//         break;
//     }
//   }
// });

// // the web server will listen on port 3000
// server.listen(3000, () => {
//   console.log("server listening on port 3000");
// });
