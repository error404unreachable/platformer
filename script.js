let counter = 0;
let onex = 1;

  function addValue() {
    counter = counter + 1;
    document.getElementById('score').innerText = counter;
    checkUpgrades();
    checkAlerts();
  }
  
function welcomeUser() {
  alert("Welcome to Save the Earth... \n Start by tapping the Earth \n Upgrades will be automatic. \n Good luck!");
}
  function checkUpgrades() {
    if (counter == 10) {
      myInterval = setInterval(autoClicker, 2000);
      onexactive += 1;
    }
    else {
      console.log("Waiting for upgrades...");
    }
  }

  function checkAlerts() {
    if (counter == 10) {
      alert("You've unlocked something...");
      document.getElementById("log-input").innerText = "Rank increased to Rank 2 \n Achievement Unlocked! \n Energy Earner, Rank 1 (Earn 10 energy) \n \n";
      alert("You used your energy to restore an old power plant, and now it is producing you 1 energy per 2 seconds.");
      counter -= 10;
    }
    else {
      console.log("Waiting for upgrade...");
    }
  }
 
  function autoClicker() {
    counter += onex;
    document.getElementById('score').innerText = counter;
  }
