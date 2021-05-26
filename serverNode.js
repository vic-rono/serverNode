//serving HTMl to the browser with routing 
//making use of the pipe function to read and write stream

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }

    else if(req.url === '/about') {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        fs.createReadStream(__dirname + '/about.html').pipe(res)

    }  
  
    //fallback error
    else {
        res.writeHead(404, { 'Content-Type' : 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res)

    }

});

//connecting to the port

server.listen(3000, '127.0.0.1');






