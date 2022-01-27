// http module practice

const http = require('http');

// http.METHODS.forEach(method => {
//     console.log(method);
// }
// );

// the above output the following
/**
ACL
BIND
CHECKOUT
CONNECT
COPY
DELETE
GET
HEAD
LINK
LOCK
M-SEARCH
MERGE
MKACTIVITY
MKCALENDAR
MKCOL
MOVE
NOTIFY
OPTIONS
PATCH
POST
PRI
PROPFIND
PROPPATCH
PURGE
PUT
REBIND
REPORT
SEARCH
SOURCE
SUBSCRIBE
TRACE
UNBIND
UNLINK
UNLOCK
UNSUBSCRIBE
 */

// console.log(http.STATUS_CODES);

// the above output the following
/**
 {
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
  '208': 'Already Reported',
  '226': 'IM Used',
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Found',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '307': 'Temporary Redirect',
  '308': 'Permanent Redirect',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Payload Too Large',
  '414': 'URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': "I'm a Teapot",
  '421': 'Misdirected Request',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Too Early',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '451': 'Unavailable For Legal Reasons',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '508': 'Loop Detected',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required'
}
*/

// http.globalAgent is an instance of http.Agent
// the http.Agent class is used in managing connection persistence and reuse for HTTP clients.
// it is a key component of node.js networking

//http.createServer creates a new instance of http.Server class
//ie:
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }
// );

// http.request is used to send a request to a server
// a member of the http.ClientRequest class

// http module haws 5 classes:
// http.Agent - makes sure server requests are queued and a single connection is used for all requests
// http.ClientRequest - used to send a request to a server via http.request or http.get
//                                  - returns a response event of type http.IncomingMessage
// http.IncomingMessage 
// http.ServerResponse - created by http.Server and passed to request handler. has many methods for headers, status codes, etc.
// http.Server - creates a new instance of http.Server class. commonly used with http.createServer
//                     - .close() method closes the server and .listen() method sets a server to listen for incoming requests

/** The following example code from week1 shows how to use the http module to send 
 * a request to a server and get a response, several different ways.
 
const http = require("http");
const fs = require("fs");

//The same process is done below three times. text, then raw html, then an html file and a json file.

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("A test message");
    res.end();
  })
  .listen(3000);

serveText("A test message");

function serveText(theText) {
  http
    .createServer((req, res) => {
      console.log("Request received");
      console.log(req.method);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(theText);
      res.end();
    })
    .listen(3000);
}

serveHtml("<h1>Hello World</h1>");

function serveHtml(theHtml) {
  http
    .createServer((req, res) => {
      console.log("Request received");
      // console.log(req.method);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(theHtml);
      res.end();
    })
    .listen(3000);
}

serveFile("first.html");

function serveFile(theFile) {
  http
    .createServer((req, res) => {
      console.log("Request received");
      // console.log(req.method);
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile(theFile, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404);
          res.write("File not found");
        } else {
          console.log(`File ${theFile}was read`);
          res.write(data);
        }
        res.end();
      });
    })
    .listen(3000);
}

serveJson("package.json");

function serveJson(theJson) {
  http
    .createServer((req, res) => {
      fs.readFile(theJson, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404);
          res.write("File not found");
        } else {
          console.log(`File ${theJson} was read`);
          res.write(data);
        }
        res.end();
      });
    })
    .listen(3000);
}
 */





