//Functions
// resetGame
// rollDice
// addPoints
// runningTotal
// reportStatus
// autoRestart
// use to kick-off game: window.onload = function () { 

//Variables
var statusReport = "";
var gamesWon = 0;
var gamesLost = 0;
var totalScore = 0;
var gamePoints = 0;
var redCrystal = 0;
var orangeCrystal = 0;
var purpleCrystal = 0;
var pinkCrystal = 0;


// Pseudocode
// 1. on game start, reset everything to zero -- function name: resetGame
//  This code will run as soon as the page loads.
function resetGame() {
    statusReport = "";
    totalScore = 0;
    $("#statusReport").append("<h2>Here we go!</h2>");
    rollDice();

}

// 2. "Roll the dice" - put random numbers under the crystals and also assign gamePoints -- function name: rollDice
function rollDice() {
    redCrystal = Math.floor(Math.random() * 12);
    orangeCrystal = Math.floor(Math.random() * 12);
    purpleCrystal = Math.floor(Math.random() * 12);
    pinkCrystal = Math.floor(Math.random() * 30);
}
// 3. Assign random points to each crystal: function name: assignPoints
function assignPoints() {
    $("#redCry").on("click", redCrystal);
    $("#orangeCry").on("click", orangeCrystal);
    $("#purpleCry").on("click", purpleCrystal);
    $("#pinkCry").on("click", pinkCrystal);
}

// 3.5 Put click event on each crystal that adds the points under each crystal to total score -- function name: addPoints

// 4. Compare running total (#totalScore) to game points (#gamePoints) -- function name: runningTotal
function runningTotal() {
    
}
// 5. alert player to win / loss -- function name: reportStatus 
// 6. create automatic restart which rolls the dice but doesn't reset to zero wins or losses -- function name: autoRestart
// NB: Game points is random number between 19 and 120
// NB: Crystal points are random numbers between 1 and 12

