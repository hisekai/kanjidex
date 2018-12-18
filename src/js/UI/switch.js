// switch forms between the japanese and english query
function switchForms() {
  const englishForm = document.getElementById("english__form");
  const kanjiForm = document.getElementById("kanji__form");
  const switchButton = document.querySelector(".button-switch");
  if (switchButton) {
    switchButton.addEventListener("click", () => {
      kanjiForm.classList.contains("is-hidden") ?
        kanjiForm.classList.remove("is-hidden") :
        kanjiForm.classList.add("is-hidden");
      englishForm.classList.contains("is-hidden") ?
        englishForm.classList.remove("is-hidden") :
        englishForm.classList.add("is-hidden");
    })
  }
}

module.exports = switchForms;