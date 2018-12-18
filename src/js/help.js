const feather = require("feather-icons");
feather.replace();

const displayHelp = document.querySelector(".display__help");
// just a few short notes to display helpful tips
// for using Kanjidex :3
displayHelp.innerHTML = `
  <h2 class="title">${feather.icons["info"].toSvg()} Help Index </h2>
  <h3 class="subtitle is-spaced">Here are a few helpful tips to get around Kanjidex!</h3>
  <div class="panel">
    <div class="panel-body">
      <div class="panel-block">
        <span class="panel-icon">
          ${feather.icons["plus"].toSvg()}
        </span>
        <span class="meaning">Click on this icon to add the displayed kanji into your vocab list. <i>Only available when a single kanji is displayed.</i></span>
      </div>
      <div class="panel-block">
        <span class="panel-icon">
          ${feather.icons["list"].toSvg()}
        </span>
        <span class="meaning">Click on this icon to go to your vocab list.</span>
      </div>
      <div class="panel-block">
        <span class="panel-icon">
          ${feather.icons["repeat"].toSvg()}
        </span>
        <span class="meaning">Click on this icon to switch forms (japanese to english and vice versa).</span>
      </div>
      <div class="panel-block">
        <span class="panel-icon">
          ${feather.icons["star"].toSvg()}
        </span>
        <span class="meaning">
          When you highlight a <b>single kanji</b> on a page, you can right click and search with Kanjidex which will open a tooltip with quick info without needing to go to the extension popup.
        </span>
      </div>
    </div>
    <div class="panel-footer">
      <a href="./popup.html">← Go back to the main page.</a>
    </div>
  </div>
`;