class stopWatch {
    constructor() {
        var laps;
        var timeElapsed = 0;
        var displayedTime;
        var status;
    }

    startTimer(status, laps, timeElapsed, displayedTime) {
        status = "running";
        laps = [timeElapsed];
        var timeId = setInterval(() => {
            timeElapsed += 1
        })
        displayedTime = timeElapsed;
    }
    
    stopTimer(status, displayedTime, timeElapsed) {
        status = "stopped";
        clearInterval(timeId);
        displayedTime = timeElapsed;
    }
    
    pauseTimer(status, timeElapsed) {
        if (status == "running") {
            clearInterval(timeId);
            status = "paused";
        } else if (status == "paused") {
            var timeId = setInterval(() => {
                timeElapsed += 1
            })
        }
    }
    
    lapTimer(status, timeElapsed) {
        if (status != "stopped") {
            laps.push(timeElapsed);
        }
        timeElapsed = 0;
    }
    
    resetLap(laps) {
        laps.splice(-1, 1, 0)
    }
    
    calculateTotalTime(laps) {
        displayedTime = timeElapsed
        for (lap in laps) {
            displayedTime += lap
        }
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
        return this.getFormattedTime(time)
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