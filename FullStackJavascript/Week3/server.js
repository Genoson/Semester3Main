// creating a server via node.js based on the video tutorial
// need http module
const fs = require('fs');
const http = require('http');

// create a server
const server = http.createServer((request, response) =>{
    //console.log(request)
    console.log('request made');
    // set header content type
    response.setHeader('Content-Type', 'text/html');
    let path = './views';
    // express can do the below in a much simpler way
    switch(request.url){
        case '/':
            path += '/index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            response.statusCode = 200;
            break
        case '/about':
            path += '/about.html';
            response.statusCode = 200;
            break
        case 'about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about.html');
        default:
            path += '/404.html';
            response.statusCode = 404;
            break
    }
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>404 Page not found</h1>');
        } else {
            // not coded presently
        }
    })
    // response.write('<p>Just a message</p>');
    // response.write('<p>Just another message</p>');
    // response.end();
});


// listen on port 3000
// port numbers are like doors (portals) into the server
server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
    });

// the request object has a lot of properties, some important ones include:
// method: GET, POST, PUT, DELETE
// url: the url of the request
// headers: the headers of the request
// body: the body of the request
// query: the query of the request
// params: the params of the request
// ip: the ip of the request
// hostname: the hostname of the request
// port: the port of the request
// protocol: the protocol of the request
// connection: the connection of the request
// socket: the socket of the request
// headersSent: a boolean that tells if the headers have been sent
// finished: a boolean that tells if the request has been finished
// and many more

// the response object has a lot of properties, some important ones include:
// statusCode: the status code of the response
// statusMessage: the status message of the response
// headers: the headers of the response
// setHeader: a function that sets the headers of the response
// getHeader: a function that gets the headers of the response
// removeHeader: a function that removes the headers of the response
// write: a function that writes the response
// end: a function that ends the response
// writeHead: a function that writes the headers of the response
// send: a function that sends the response
// json: a function that sends a json response
// sendFile: a function that sends a file response
// redirect: a function that redirects the response
// download: a function that downloads the response
// writeContinue: a function that writes the continue response
// and many more

//  once the server is running  you have to shut it down and restart it any time you update the server code
// the nodemon package can be used to restart the server automatically on updates

// when sending responses you can specify the content type of the response
// these are the most common content types:
// text/html
// text/css
// text/javascript
// application/json
// application/javascript
// application/xml
// application/x-www-form-urlencoded
// multipart/form-data
// image/jpeg
// image/png
// image/gif
// audio/mpeg
// audio/ogg
// video/mp4

