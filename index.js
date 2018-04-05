let http = require("http");
let fs = require("fs");
let path = require("path");

let handleError = (err, res) => {
  res.writeHead(404);
  res.end(); }

let server = http.createServer(function (req, res){
  let fileName = req.url.length > 1? req.url.substring(1) : "index.html";
  fs.readFile(
    path.resolve(__dirname, "app", fileName),
    function(err, content){
      if(err) handleError(err, res);
      else    res.end(content);
  });
})

server.listen(3030);
