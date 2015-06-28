
exports.timeAction = function(callback, round, freq, time_end){
	if(	typeof round !== 'string' || typeof freq !== 'number' || typeof callback !== 'function'	){
		throw 'Not right parameters are set!';
		return 0;
	}

	var round_time  	= round,
		frequency 		= freq,
		call_function 	= callback,
		start_time  	= new Date().getTime(),
		diff_time  		= false,
		time_clear_interval = false,
		interval;

	try{
		var time = new Date(time_end),
			relTime = (time.getTime()-new Date('1970-01-01').getTime());

		if(time != 'Invalid Date' && ( relTime>start_time )){
			diff_time = relTime - start_time;
			time_clear_interval= relTime;
		}
	} catch(e){
		throw 'Not correct setting of the lifetime counter! '+e;
		return 0;
	}

	switch(round_time){
		case 'ms':
			frequency = freq;
			break;
		case 's':
			frequency = freq*1000;
			break;
		case 'm':
			frequency = freq*60000;
			break;
		case 'h':
			frequency = freq*3600000;
			break;
		case 'd':
			frequency = freq*86400000;
			break;
		default:
			frequency = 1000;
			break;
	}

	this.run = function(){
		interval=setInterval(function(){
			var current_time = new Date().getTime();
			if(time_clear_interval && time_clear_interval<=current_time) {
				clearInterval(interval);
			}
			call_function();
		}, 	frequency);
	}

	this.stop = function(){
		clearInterval(interval);
	}

	this.reset = function(){
		if(time_clear_interval){
			time_clear_interval+=diff_time;
			diff_time=time_clear_interval-new Date().getTime();
			console.log('Lifetime updated!');
		} else {
			throw 'The stop timer is undefined!';
		}
	}

	return this;
}
