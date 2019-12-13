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
        setInterval(() => {
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
        // TODO: pause timer
        if (status == "paused") {}
    
    }
    
    function lapTimer() {}
    
    function resetLap() {}
    
    function calculateTotalTime() {}
    
    function calculateAverageTime() {}
    
    function calculateFastestLap() {}
    
    function displayTime() {}
    
    function getFormattedTime() {}
}
