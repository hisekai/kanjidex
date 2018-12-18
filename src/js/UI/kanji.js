const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();
const spinner = require("./spinner.js");
const storage = require("../storage/storage");
const feather = require("feather-icons");
feather.replace();

async function kanjiUI(data) {
  await storage
    .getStorage("tempSearchResults")
    .then(results => {
      const temp = results.tempSearchResults;
      const tempArray = Array.from(temp);
      if (tempArray.length > 0) {
        displayButton();
      }
    })
    .catch(e => console.error(e));
  spinner.showSpinner();
  jisho.searchForKanji(data).then(result => {
    spinner.hideSpinner();
    const cardKanji = document.querySelector(".display__kanji");

    // A hack to get the path to the svg directory of jisho.org but idk better atm, fix later
    const url = result.strokeOrderSvgUri;
    const newUrl = url.substring(0, url.lastIndexOf("/")) + "/";

    const dmak = new Dmak(data, {
      element: "card-svg",
      uri: newUrl
    });

    // Create the button for animation
    cardKanji.innerHTML = `
      <div class="card-image">
        <!-- kanji video -->
        <figure class="has-text-centered">
          <div id="card-svg"></div>
          <!-- start button group -->
          <div class="buttons has-addons is-centered">
            <button id="prev" class="button">
              ${feather.icons["skip-back"].toSvg()}
            </button>
            <button id="pause" class="button">
              ${feather.icons.pause.toSvg()}
            </button>
            <button id="play" class="button">
              ${feather.icons.play.toSvg()}
            </button>
            <button id="next" class="button">
              ${feather.icons["skip-forward"].toSvg()}
            </button>
            <button id="reset" class="button">
              ${feather.icons["rotate-ccw"].toSvg()}
            </button>
          </div>
          <!-- end button group -->
        </figure>
        <!-- end kanji video -->
      </div>
      <div class="card-content">
        <!-- kanji meaning -->
        <h2 class="card__title">
          ${result.meaning ? result.meaning : "Not found"}
        </h2>
        <!-- end kanji meaning -->
        <!-- kanji details -->
        <div class="card__details">
          <div class="card__details__row">
            <div class="card__details__item card__details__item--half">
              <span>Strokes: </span>
              ${result.strokeCount ? result.strokeCount : "Not found"}
            </div>
            <div class="card__details__item card__details__item--half">
              <span>JLPT lvl: </span>
              ${result.jlptLevel ? result.jlptLevel : "Not found"}
            </div>
          </div>
          <div class="card__details__row">
            <div class="card__details__item">
              <span>Onyomi: </span>
              ${result.onyomi ? result.onyomi : "Not found"}
            </div>
          </div>
          <div class="card__details__row">
            <div class="card__details__item">
              <span>Kunyomi: </span>
              ${result.kunyomi ? result.kunyomi : "Not found"}
            </div>
          </div>
          <div class="card__details__row">
            <div class="card__details__item card__details__item--link">
              <a class="jisho-link" href="${
                result.uri
              }">View on jisho.org ${feather.icons["external-link"].toSvg()}</a>
            </div>
          </div>
        </div>
        <!-- end kanji details -->
      </div>
    `;

    // needed to manipulate the strokes for dmak
    const prev = document.getElementById("prev");
    prev.onclick = function() {
      dmak.eraseLastStrokes(1);
    };
    const pause = document.getElementById("pause");
    pause.onclick = function() {
      dmak.pause();
    };
    const play = document.getElementById("play");
    play.onclick = function() {
      dmak.render();
    };
    const next = document.getElementById("next");
    next.onclick = function() {
      dmak.renderNextStrokes(1);
    };
    const reset = document.getElementById("reset");
    reset.onclick = function() {
      dmak.erase();
    };

    // first remove the add to vocab list button from prior searches
    const toRemove = document.querySelector(".button-add-to-vocab-list");
    if (toRemove) {
      toRemove.remove();
    }
    // create the add to vocab list button and add it to the button group
    const metaDiv = document.querySelector(".card__button-group");
    if (!document.querySelector(".button-add-to-vocab-list")) {
      const btn = document.createElement("button");
      btn.classList = "button button-add-to-vocab-list";
      btn.innerHTML = feather.icons["plus"].toSvg();
      btn.addEventListener("click", e => {
        e.preventDefault();
        storage.saveKanji(data);
      });
      if (metaDiv) {
        metaDiv.appendChild(btn);
      }
    }

    // Allow opening jisho links inside of the popup.html in a new tab
    document
      .querySelector(".jisho-link")
      .addEventListener("click", function(e) {
        chrome.tabs.create({ url: e.target.href });
      });
  });

  // display tab content
  const content = document.querySelector(".tab-content");
  if (content) {
    content.style.display = "block";
  }
  // display kanji tab
  const tabs = document.querySelector(".tabs");
  if (tabs) {
    tabs.style.display = "block";
  }
  const displayKanjiDetails = document.querySelector(".display__kanji-details");
  if (displayKanjiDetails) {
    displayKanjiDetails.style.display = "block";
  }
}

// display the button to return to research results
function displayButton() {
  const isReturnButton = document.querySelector(".is-return");
  if (isReturnButton) {
    const displayReturn = document.querySelector(".display__return-button");
    displayReturn.style.display = "block";
    isReturnButton.addEventListener("click", buttonReturnHandler);
  } else {
    const displayReturn = document.querySelector(".display__return-button");
    const buttonReturn = document.createElement("button");
    if (buttonReturn) {
      buttonReturn.classList = "button is-text is-return";
      buttonReturn.innerHTML = `← back to results`;
      buttonReturn.addEventListener("click", buttonReturnHandler);
    }
    if (displayReturn) {
      displayReturn.appendChild(buttonReturn);
      displayReturn.style.display = "block";
    }
  }
}

// handle return to results button
// hide the kanji details
function buttonReturnHandler() {
  const displayResults = document.querySelector(".display__search-results");
  displayResults.style.display = "block";
  const displayKanjiDetails = document.querySelector(".display__kanji-details");
  displayKanjiDetails.style.display = "none";
  const addToVocabButton = document.querySelector(".button-add-to-vocab-list");
  if (addToVocabButton) {
    addToVocabButton.remove();
  }
}

module.exports = kanjiUI;
