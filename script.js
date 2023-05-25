let counter = 0;
let onex = 1;
let onexactive = 0;
let twox = 4;

  function addValue() {
    counter = counter + 1;
    document.getElementById('score').innerText = counter;
    checkUpgrades();
    checkAlerts();
  }
  
function welcomeUser() {
  alert("Welcome to Save the Earth... \n Start by tapping the Earth \n Upgrades will be automatic. \n Good luck!");
}

function tenUpgrades() {
  if (onexactive == 0) {
  clearInterval(myInterval);
  myInterval = setInterval(autoClicker, 2000);
  onexactive += 1;
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

function fiftyUpgrades() {
  if (onexactive == 1) {
  clearInterval(myInterval);
  onex += 1;
  myInterval = setInterval(autoClicker, 1000);
  onexactive += 1;
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

function twofiftyUpgrades() {
  if (onexactive == 2) {
  clearInterval(newInterval);
  newInterval = setInterval(secondClicker, 1000);
  onexactive += 1;
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

  function checkUpgrades() {
    switch (counter) {
      case 10:
        tenUpgrades();
        break;
      case 50:
      fiftyUpgrades();
        break;
      case 250:
      twofiftyUpgrades();
        break;
      default:
        console.log("Waiting for upgrade...");
    }
  }

  function checkAlerts() {
    switch (counter) {
      case 10:
        alert("You've unlocked something...");
        document.getElementById("log-input").innerText = "Rank increased to Rank 2 \n Achievement Unlocked! \n Energy Earner, Rank 1 (Earn 10 energy) \n \n";
        alert("You used your energy to restore an old power plant, and now it is producing you 1 energy per 2 seconds.");
        setTimeout(2000);
        counter -= 10;
        alert("You found a hidden chest with energy inside!");
        counter += 15;
        break;
      case 50:
          alert("You've unlocked something...");
          document.getElementById("log-input").innerText = "2 achievements unlocked! \n Energy Earner, Rank 2 (Earn 50 energy), \n Upgrader, Rank 1 (Upgrade any power plant) \n \n";
          alert("You used your energy to upgrade the power plant.");
          counter -= 50;
          alert("Your friends and family support you helping the Earth. They fund you with 100 energy.");
          counter += 100;
        break;
      case 250:
          alert("You've unlocked something...");
          document.getElementById("log-input").innerText = "Rank increased! \n Rank 2 --> Rank 3 \n Achievement Unlocked! \n Energy Earner, Rank 3 (Earn 250 energy) \n Achievement Unlocked! \n Restorer, Rank 1 (Restore 2 power plants) \n \n";
          alert("You restored another power plant!");
          counter -= 250;
          alert("The new power plant produces you 4 energy per second!");
          counter += 50;
          alert("The government has provided you with energy...");
        break;
      default:
      console.log("Waiting for alerts...");
    }
  }
 
  function autoClicker() {
    counter += onex;
    document.getElementById('score').innerText = counter;
  }
