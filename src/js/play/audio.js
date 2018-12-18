const feather = require("feather-icons");

// used for playing audio files
// in the examples tab
module.exports = function audio() {
  const playlist = document.getElementById("playlist");
  const examplesList = document.querySelectorAll(".example");
  for (let i = 0; i < examplesList.length; i++) {
    let currentFile = examplesList[i].querySelector("a");
    currentFile.addEventListener("click", () => {
      currentFile.querySelector("audio").play();

      if (currentFile.querySelector("audio").play) {
        currentFile.querySelector(
          ".panel-icon"
        ).innerHTML = feather.icons.loader.toSvg();
        currentFile.style.backgroundColor = "#ebc7c7";
      }
    });
    let currentAudioFile = examplesList[i].querySelector("audio");
    currentAudioFile.addEventListener("ended", () => {
      currentFile.querySelector(
        ".panel-icon"
      ).innerHTML = feather.icons.play.toSvg();
      currentFile.style.backgroundColor = "#fff";
    });
  }
};
