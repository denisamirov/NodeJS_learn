const http = require('http')

var server = http.createServer()

server.on('request', function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('New server')
})

server.on('connection', function() {
    console.log('connection is success')
})

server.listen(3002, function() {
    console.log('Listening')
})

console.log('Server is localhost:3002')