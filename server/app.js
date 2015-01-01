var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
var module3 = require('./module3');

http.createServer(function (request, response){
    response.writeHead(200);
    //response.write('hello world');
    response.write(module3.accountBalance());
    response.write(module3.converterNum());
    response.end();
}).listen(3000);

console.log('Listening on port 3000');