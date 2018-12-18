const displayButtons = require("./buttons");
const clear = require("./clear");

const displayStart = document.querySelector(".display__start");
const displayResults = document.querySelector(".display__search-results");

function start() {
  if (navigator.onLine) {
    // display the start/greeting page if not visible
    if (displayStart) {
      clear();
      displayButtons();
      displayResults.style.display = "none";
      displayStart.style.display = "block";
      displayStart.innerHTML = `
        <div class="bg-kitty bg-kitty__happy"></div>
        <h3>explore kanji</h3>
        <p>Enter your search or simply highlight the desired kanji.</p>
        <p>If you want to learn more about Kanjidex, you can go to the <a href="./help.html">help</a> page.</p>
      `;
    }
  } else {
    isOffline();
  }
}

function hide() {
  if (displayStart) {
    displayStart.style.display = "none";
  }
}

function show() {
  if (displayStart) {
    displayStart.style.display = "block";
  }
}

// in case the user is offline
function isOffline() {
  clear();
  displayStart.innerHTML = `
    <div class="bg-kitty bg-kitty__laptop"></div>
    <h4>You are offline</h4>
    <p>Sorry, but you need to be online in order to use Kanjidex.</p>
  `;
}

module.exports = { start, show, hide, isOffline };
