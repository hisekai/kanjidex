const clear = require("../UI/clear");

module.exports = function notKanji() {
  const displayStart = document.querySelector(".display__start");
  if (displayStart) {
    clear();
    displayStart.style.display = "block";
    displayStart.innerHTML = `
      <div class="bg-kitty bg-kitty__confused"></div>
      <h4>Not a kanji</h4>
      <p>Your search query doesn't seem to be a kanji character.</p>
      <p><a href="./popup.html">Return to the main page.</a></p>
    `;
  }
};
