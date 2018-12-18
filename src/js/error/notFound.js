const clear = require("../UI/clear");

module.exports = function notFound() {
  const displayStart = document.querySelector(".display__start");
  if (displayStart) {
    clear();
    displayStart.style.display = "block";
    displayStart.innerHTML = `
      <div class="display__start">
        <div class="bg-kitty bg-kitty__sad"></div>
        <h4>Not found</h4>
        <p>Sorry, no results found.</p>
        <p><a href="./popup.html">Return to the main page.</a></p>
      </div>
    `;
  }
};
