var timeElapsed;
var displayedTime;
var laps;
var status;

function startTimer() {
    laps = [0];
	time = 0;
	status = "running";
}

function stopTimer() {
    status = "paused";
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
