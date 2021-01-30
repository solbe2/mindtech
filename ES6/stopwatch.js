class stopWatch {
	
	constructor() {
		this.min = 0;
		this.sec = 0;
		this.msec = 0;
		this.timer;
	}
	
	startStopWatch() {
		this.timer = setInterval(function printTime(){
			this.msec = this.msec + 1;
			
			if(this.msec == 100) {
				this.sec = this.sec + 1 ;
				this.msec = 0;
			}
			if(this.sec == 60) {
				this.min = this.min + 1 ;
				this.sec = 0;
			}
			if(this.min == 60) {
				this.min = 0;
			}
			
			let displayedMsec = this.msec.toString().padStart(2, "0");
			let displayedSec = this.sec.toString().padStart(2, "0");
			let displayedMin = this.min.toString().padStart(2, "0");
			
			document.getElementById("stopwatch").innerHTML = displayedMin + ':' + displayedSec + ':' + displayedMsec;
		}.bind(this), 10);
	}
	
	stopStopWatch() {
		clearInterval(this.timer);
	}
	
	resetStopWatch() {
		clearInterval(this.timer);
		this.min = 0;
		this.sec = 0;
		this.msec = 0;
		document.getElementById("stopwatch").innerHTML = '00:00:00';
	}
}