const storage = require("../storage/storage");
const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();
const UI = require("./ui.js");
const ui = new UI();
const feather = require("feather-icons");
feather.replace();

// display temporary search results
async function getResults(storageType) {
  const displayResults = document.querySelector(`.display__search-results`);
  if (displayResults) {
    displayResults.style.display = "block";
  }
  const panel = document.querySelector(".panel-results");
  const list = document.getElementById("saved-kanjis");
  if (panel) {
    panel.style.display = "block";
  }
  if (list) {
    list.style.display = "block";
  }
  await storage.getStorage(storageType).then(results => {
    let temp = results[storageType];
    if (storageType === "tempSearchResults") {
      panel.innerHTML = "";
    }
    if (temp.length > 0) {
      temp.forEach(el => {
        jisho.searchForKanji(el).then(result => {
          let block = document.createElement("div");
          block.classList = "panel-block";
          block.innerHTML = `
          <span class="panel-icon">
              ${el}
          </span>
          <a href="#">
            <span class="meaning">
            ${result.meaning}
            </span>
          </a>
          <span class="panel-icon-delete">
          ${feather.icons["trash-2"].toSvg()}
          </span>
          `;
          let deleteButton = block.querySelector(".panel-icon-delete");
          if (deleteButton) {
            deleteButton.addEventListener("click", e => {
              e.preventDefault();
              storage.removeFromStorage(storageType, el);
              block.remove();
            });
          }
          let meaning = block.querySelector(".meaning");
          //existential condition
          if (meaning) {
            meaning.addEventListener("click", () => {
              if (displayResults) {
                displayResults.style.display = "none";
              }
              ui.displayKanjiDetails(el);
            });
          }
          panel.appendChild(block);
        });
      });
    }
  });
}

module.exports = getResults;
