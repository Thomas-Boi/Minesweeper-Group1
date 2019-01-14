var http = require('http'); // import http module

http.createServer(function (req, res) { // create a server
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url)
  res.end();
}).listen(8080); // if anyone access port 8080, see this page