var statusReport = "";
var gamesWon = 0;
var gamesLost = 0;
var totalScore = 0;
var gamePoints = 0;
var redCrystal = 0;
var orangeCrystal = 0;
var purpleCrystal = 0;
var pinkCrystal = 0;

$(document).ready(function () {
  loadText();
  $("#redCry").click(function () {
    this.value = redCrystal;
    totalScore = totalScore + redCrystal;
    $("#totalScore").text(totalScore);
    scoreBoard();
  });
  $("#orangeCry").click(function () {
    this.value = orangeCrystal;
    totalScore = totalScore + orangeCrystal;
    $("#totalScore").text(totalScore);
    scoreBoard();
  });
  $("#purpleCry").click(function () {
    this.value = purpleCrystal;
    totalScore = totalScore + purpleCrystal;
    $("#totalScore").text(totalScore);
    scoreBoard();
  });
  $("#pinkCry").click(function () {
    this.value = pinkCrystal;
    totalScore = totalScore + pinkCrystal;
    $("#totalScore").text(totalScore);
    scoreBoard();
  });
  runGame();

  function loadText() {
    $("#totalScore").text(totalScore);
    $("#gamesWon").text(gamesWon);
    $("#gamesLost").text(gamesLost);
    $("#statusReport").html("<h2>Here we go!</h2>");
  }

  function runGame() {
    pointsToMatch();
    rollDice();
  }

  function randomNumber(min = 1, max = 12) {
    return Math.floor(Math.random() * max) + min;
  }

  function delayedReset() {
    setTimeout(resetGame, 3000);
  }

  function resetGame() {
    totalScore = 0;
    gamePoints = 0;
    $("#totalScore").text(totalScore);
    $("#statusReport").html("<h2>New game starting soon...</h2>");
    setTimeout(playAlert, 1000);
    runGame();
  };

  function pointsToMatch() {
    gamePoints = randomNumber(19, 101);
    $("#gamePoints").text(gamePoints);
    console.log("Game points are: " + gamePoints)
  };

  function rollDice() {
    redCrystal = randomNumber();
    purpleCrystal = randomNumber();
    orangeCrystal = randomNumber();
    pinkCrystal = randomNumber();
    console.log("Red is: " + redCrystal);
    console.log("Purple is: " + purpleCrystal);
    console.log("Orange is: " + orangeCrystal);
    console.log("Pink is: " + pinkCrystal);
  };

  function scoreBoard() {
    if (totalScore === gamePoints) {
      gamesWon = gamesWon + 1;
      totalScore = 0;
      redCrystal = 0;
      orangeCrystal = 0;
      purpleCrystal = 0;
      pinkCrystal = 0;
      $("#statusReport").html("<h2>Yippee! You won!</h2>");
      $("#gamesWon").text(gamesWon);
      delayedReset();
    } else if (totalScore > gamePoints) {
      gamesLost = gamesLost + 1;
      totalScore = 0;
      redCrystal = 0;
      orangeCrystal = 0;
      purpleCrystal = 0;
      pinkCrystal = 0;
        $("#statusReport").html("<h2>Nice try but you lose</h2>");
      $("#gamesLost").text(gamesLost);
      delayedReset();
    }
  }

  function playAlert() {
    $("#statusReport").html("<h2>Play!</h2>")
  }

})
