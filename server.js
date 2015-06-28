var http = require('http'),
	timer = require('./timeAction'),
	counter = 0;

timer.timeAction(upFunction, 'ms', 1000, '2015-06-29 00:32');
timer.run();


function upFunction(){
	counter ++;
}


var server =  new http.Server().listen(1300, '127.0.0.1');
server.on('request', function(req, res){
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('<li>'+ counter + '</li>');
});
