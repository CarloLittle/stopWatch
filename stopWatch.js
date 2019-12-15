class stopWatch {
    function constructor() {
        var laps;
        var timeElapsed;
        var displayedTime;
        var status;
    }

    function startTimer() {
        timeElapsed = 0;
        laps = [timeElapsed];
        var timeId = setInterval(() => {
            timeElapsed += 1
        })
        displayedTime = elapstedTime;
        status = "running";
    }
    
    function stopTimer() {
        // TODO: pause timer
        status = "paused";
        displayedTime = elapstedTime;
        displayedTime = timeElapsed;
    }
    
    function pauseTimer(status) {
        if (status == "running") {
            clearInterval(timeId);
        } else if (status == "paused") {
            var timeId = setInterval(() => {
                timeElapsed += 1
            }
        }
    }
    
    function lapTimer() {
        if (status != "stopped") {
            laps.push(0);
        }
    }
    
    function resetLap() {}
    
    function calculateTotalTime() {}
    
    function calculateAverageTime() {}
    
    function calculateFastestLap() {}
    
    function displayTime() {}
    
    function getFormattedTime() {}
}
