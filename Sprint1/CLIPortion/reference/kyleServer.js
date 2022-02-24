// web server code provided by Kyle as a base for the server, integrated into the main code base, kept for reference

const http = require("http");

const fs = require("fs");

const server = http
  .createServer(function (req, res) {
    var html = buildHtml(req);

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(html);
  })
  .listen(3000);

function buildHtml(req) {
  return (
    "<!DOCTYPE html>" +
    '<html lang="en"><head>' +
    "<title>Sprint 1 Sem 3</title><style> body{background-color: aqua;}form{text-align: center;}</style>" +
    "</head><body>" +
    '<br><br><br><form><label for="fname">First Name:</label><br><input type="text" id="fname" name="fname"><br>' +
    '<label for="lname">Last Name:</label><br><input type="text" id="lname" name="lname"><br>' +
    '<label for="username">Username:</label><br><input type="text" name = "username" id = "username"><br>' +
    '<label for="id">Phone Number:</label><br> <input type="text" name = "id" id = "id"><br> ' +
    '<label for="email">Email:</label><br><input type="text" name="email" id="email"><br>' +
    '<br><input type="submit" value="submit">' +
    "</body></html>"
  );
}
