class stopWatch {
    constructor() {
        this.laps = [];
        this.timeElapsed = 0;
        this.displayedTime = undefined;
        this.status = "stopped";
        this.timeId = undefined;
    }

    startTimer() {
        this.status = "running";
        this.laps = [this.timeElapsed];
        this.timeId = setInterval(() => {
            this.timeElapsed += 1
        })
        this.displayedTime = this.timeElapsed;
    }

    stopTimer() {
        this.status = "stopped";
        clearInterval(this.timeId);
        this.displayedTime = this.timeElapsed;
    }

    pauseTimer() {
        if (this.status == "running") {
            clearInterval(this.timeId);
            this.status = "paused";
        } else if (this.status == "paused") {
            this.timeId = setInterval(() => {
                this.timeElapsed += 1
            })
        }
    }

    lapTimer() {
        if (status != "stopped") {
            this.laps.push(timeElapsed);
        }
        this.timeElapsed = 0;
    }

    resetLap() {
        this.laps.splice(-1, 1, 0)
    }

    calculateTotalTime() {
        this.displayedTime = this.timeElapsed
        laps.forEach(function(lap) {
            this.displayedTime = this.displayedTime + lap
        })
        return this.formatTime(this.displayedTime)
    }

    calculateAverageTime() {
        return this.formatTime(
            this.calculateTotalTime(laps) / this.laps.length
        );
    }

    calculateFastestLap() {
        return this.formatTime(Math.min(this.laps));
    }

    formatTime(time) {
        // Returns time formatted as 01:00:00.001
        milliseconds = time.splice(-1, 3);
        seconds = time.splice(-1, 2);
        minutes = time.splice(-1, 2);
        hours = time;
        return `{$hours}:{$minutes}:{$seconds}.{$milliseconds}`
    }
}

module.exports = stopWatch;
