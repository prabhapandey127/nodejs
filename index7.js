

const http = require('http')

http.createServer((req, res) => {
    res.write("Hello this is Prabhat");
    res.end();
}).listen(4500);
