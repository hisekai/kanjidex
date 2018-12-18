const spinner = document.querySelector(".spinner");

function showSpinner() {
  spinner.style.display = "block";
}

function hideSpinner() {
  spinner.style.display = "none";
}

module.exports = { showSpinner, hideSpinner };