const http = require('http');
const fs = require('fs');



http.createServer(function(req, res) {

    fs.readFile('./index.html', function(err, html) {
        var obj = {
            nombre: 'Andrés Montealere',
            cargo: 'PRofesional IT',
            edad: 34
        };
        const ct = 'application/json';
        res.writeHead(200, { 'Content-Type': ct })
        res.write(JSON.stringify(obj));
        res.end();
    });

    console.log("Server running 2 3 JSON");
}).listen(3000);