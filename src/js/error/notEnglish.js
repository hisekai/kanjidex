const clear = require("../UI/clear");
function notEnglish() {
  const displayStart = document.querySelector(".display__start");
  if (displayStart) {
    clear();
    displayStart.style.display = "block";
    displayStart.innerHTML = `
    <div class="bg-kitty bg-kitty__confused"></div>
    <h4>Not an english query</h4>
    <p>Please enter an english word or switch forms to Japanese.</p>
    <p><a href="./popup.html">Return to the main page.</a></p>
  `;
  }
}

module.exports = notEnglish;
