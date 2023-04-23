const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello, Web!')
}).listen(3001)

console.log('App is localhost:3001')


// {'Content-Type': 'text/plain'}