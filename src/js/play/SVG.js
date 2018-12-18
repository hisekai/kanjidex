// used when animating the radical in the radicalUI
module.exports = function playSVG() {
  const feather = require("feather-icons");
  const SVGBtn = document.querySelector(".play-svg");
  const SVGBox = document.querySelector("#svg-root");
  const SVGImage = document.querySelector("svg image");
  SVGBox.pauseAnimations();
  SVGBtn.addEventListener("click", animateSVG);

  function animateSVG() {
    if (SVGBox.animationsPaused()) {
      SVGBox.unpauseAnimations();
      SVGBtn.innerHTML = feather.icons.pause.toSvg();
    } else {
      SVGBox.pauseAnimations();
      SVGBtn.innerHTML = feather.icons.play.toSvg();
    }
  }
};
