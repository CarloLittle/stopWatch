class stopWatch {
    constructor() {
        var this.laps;              // Are all this. variables accessible within the class (like class-globals?)?
        var this.timeElapsed = 0;
        var this.displayedTime;
        var this.status;
        var this.timeId;
    }

    startTimer(status, laps, timeElapsed, displayedTime) {
        this.status = "running";
        this.laps = [this.timeElapsed];
        this.timeId = setInterval(() => {
            this.timeElapsed += 1
        })
        this.displayedTime = this.timeElapsed;
    }

    stopTimer(status, displayedTime, timeElapsed) {
        this.status = "stopped";
        clearInterval(this.timeId);
        this.displayedTime = this.timeElapsed;
    }

    pauseTimer(status, timeElapsed) {
        if (this.status == "running") {
            clearInterval(this.timeId);
            this.status = "paused";
        } else if (this.status == "paused") {
            this.timeId = setInterval(() => { // What if you don't know when a variable is first going to be called? Hoisting?
                this.timeElapsed += 1
            })
        }
    }

    lapTimer(status, timeElapsed) {     // Do I even need to pass in anything as a parameter if I can modify this. ?
        if (status != "stopped") { // Should I be manipulating status or this.status ?
            this.laps.push(timeElapsed);
        }
        this.timeElapsed = 0; // Do I need to pass in all variables as parameters?
    }

    resetLap(laps) {
        this.laps.splice(-1, 1, 0)
    }

    calculateTotalTime(laps) {
        this.displayedTime = this.timeElapsed
        laps.forEach(function(lap) {
            displayedTime = displayedTime + lap
        })
        return displayedTime
    }

    calculateAverageTime(laps) {
        // ?? Are parameters necessary or are all variables accessible whithin one class?
        return this.calculateTotalTime(laps) / laps.length
    }

    calculateFastestLap(laps) {
        return Math.min(laps)
    }

    displayTime(time) {
        return this.getFormattedTime(time) // Are class methods also available under this. ?
    }
    getFormattedTime(millisec) {
        var seconds = (millisec / 1000).toFixed(1);
        var minutes = (millisec / (1000 * 60)).toFixed(1);
        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
        if (seconds < 60) {
            return seconds + " Sec";
        } else if (minutes < 60) {
            return minutes + " Min";
        } else if (hours < 24) {
            return hours + " Hrs";
        } else {
            return days + " Days"
        }
    }
}

module.exports = stopWatch;
