# TimeAction

TimeAction is a smart counter. It is transmitted by the callback function with a predetermined period of time. You can limit the time the counter putting the end date of his work.

Run it is very easy =)	

	var http = require('http'),
		time = require('./timer'),
		counter = 0;

	time.timer(upFunction, 'ms', 1000, '2015-06-29 00:32');
	time.run();
	time.reset(); //We extend the lifetime of the meter for the specified period
	time.stop();  //Stop the counter immediately


# Options that can be transferred:
	timer(param1, param2, param3, param4);


	param1 - name callback method
	param2 - ms(milliseconds)/(s)seconds/(m)minutes/(h)hours/(d)days
	param3 - the number of milliseconds, seconds, etc
	param4 - end date of operation of the counter
	
