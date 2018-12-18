const feather = require("feather-icons");
feather.replace();

function displayButtons() {
  // display icons for switching the form
  // and going to the vocab list
  const listButton = document.querySelector(".button-vocab-list");
  listButton.innerHTML = feather.icons["list"].toSvg();
  const switchButtonIcon = document.querySelector(".button-switch");
  switchButtonIcon.innerHTML = feather.icons["repeat"].toSvg();
}

module.exports = displayButtons;