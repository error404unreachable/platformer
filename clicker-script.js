var score = 0; //localStorage.getItem("savedScore");
var first = "locked";
var second = "locked";
var display = document.getElementById("score");
var log = document.getElementById("log");

function welcomeUser() {
   alert("Welcome to Earth Clicker!");
   alert("Start by tapping the Earth. \n Acheivements can be found in the log. \n Upgrades are automatic. \n \n Good Luck!");
}

function addScore() {
   score += 1;
   display.innerText = score;
   checkUpgrades();
}

function checkUpgrades() {
   if (first == "locked") {
      if (score >= 50) {
         first = "unlocked";
         firstInterval();
      } 
   } else {
        if (second == "locked") {
           if (score >= 500) {
              second = "unlocked";
              secondInterval();
           } else {
                console.error("locked");
             }
        }
     }
}

function saveScore() {
   localStorage.setItem("savedScore", score);
}

function firstInterval() {
    clearInterval(myInterval);
    myInterval = setInterval(addScore, 2000);
   log.innerHTML = "1st interval";
}

function secondInterval() {
    clearInterval(mySecondInterval);
    mySecondInterval = setInterval(addScore, 1000);
    log.innerHTML = "2nd interval";
}
