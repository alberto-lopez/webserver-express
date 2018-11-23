const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'application/json'});

    let output = {
        name: 'Alberto',
        age: 33,
        url: request.url
    };

    response.write(JSON.stringify(output));
    response.end();
}).listen(8080);

console.log('Listening on the port 8080');