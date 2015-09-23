var http = require('http');
var random = require('./randomNum');

http.createServer(function (request, response){
    response.writeHead(200);
    response.write('hello world');
    response.write(random());
    response.end();
}).listen(3000);

console.log('Listening on port 3000');