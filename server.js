var express = require('express'),
	app = express(),
	connections = 0;

app.get('/angular.js', function (req, res) {
  //res.send('Hello World!');
  console.log('connections: ', ++connections, req.originalUrl);
  setTimeout(function(){
  	res.sendFile(__dirname + '/angular.js');
  	--connections;
  }, 3000);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(__dirname);
});