const http = require('http');
const fs = require('fs');
const ct = 'text/html';
http.createServer(function(req, res) {
    fs.readFile('./index.html', function(err, html) {
        var html_str = html.toString()
        var nombre = "ANDES Montealegre";
        var variables = html_str.match(/[^\{\}]+(?=\})/g);

        for (var i = variables.length - 1; i >= 0; i--) {
            var value = eval(variables[i]);

            html_str = html_str.replace("{" + variables[i] + "}", value)
        }


        res.writeHead(200, { 'Content-Type': ct })
        res.write(html_str);
        res.end();
    });

    console.log("Server RENDER 2 3 JSON");
}).listen(3000);