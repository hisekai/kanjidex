// makes it possible to control
// the kanji animation in the kanjiUI.js
module.exports = function video(id) {
  const video = document.getElementById(id);
  const playPause = document.getElementById("play-pause");
  playPause.addEventListener("click", e => {
    e.preventDefault();
    if (video.paused) {
      video.play();
      playPause.innerHTML = `
        <svg class="icon icon-alert-triangle">
            <use xlink:href="./assets/sprite.svg#icon-pause-circle"></use>
      `;
    } else {
      video.pause();
      playPause.innerHTML = `
        <svg class="icon icon-alert-triangle">
            <use xlink:href="./assets/sprite.svg#icon-play-circle"></use>
      `;
    }
  });
  // return video back to normal after the video has finished
  video.addEventListener("ended", () => {
    playPause.innerHTML = `
        <svg class="icon icon-alert-triangle">
            <use xlink:href="./assets/sprite.svg#icon-play-circle"></use>
      `;
  });
};
