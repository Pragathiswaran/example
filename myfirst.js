var http = require('http');
// var dt = require("./firstmodule");
// var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  // res.end(txt);

  // res.write(dt.myDateTime());
  fs.readFile('demo.html', function(err,data){
    res.write(data);
    return res.end();
  });
  
  fs.appendFile('mynewfile1.txt','  hello world\n', function (err) {
    if (err) throw err;
    console.log('File saved!!!');
  });

  // fs.open('mynewfile1.txt','w', function (err) {
  //   if (err) throw err;
  //   console.log('File Modified!!!');
  // });
}).listen(8080);
