const UI = require("./UI/ui.js");
const ui = new UI();
const displayResults = require("./UI/results");
const notifications = require("./storage/notifications");
const feather = require("feather-icons");
feather.replace();

const clearButton = document.querySelector(".button-clear");

// display saved kanjis from the local storage
chrome.storage.local.get(
  {
    savedKanjis: []
  },
  function(result) {
    let savedKanjis = result.savedKanjis;
    if (savedKanjis.length > 0) {
      displayResults("savedKanjis");
    } else {
      document.getElementById("display-vocab").innerHTML = "";
      document.getElementById("vocab-message").style.display = "block";
      noKanjis();
    }
  }
);

// Search function
const searchSavedKanji = document.getElementById("search-saved-kanjis");
searchSavedKanji.addEventListener("keyup", searchSavedKanjis);

/* Search function for the saved kanjis */
function searchSavedKanjis(e) {
  e.preventDefault();
  const searchQuery = searchSavedKanji.value;
  const panel = document.getElementById("list-kanjis");
  const block = panel.querySelectorAll(".panel-block");
  // Loop through all list items, and hide those who don't match the search query
  chrome.storage.local.get(
    {
      savedKanjis: []
    },
    function(result) {
      let savedKanjis = result.savedKanjis;
      if (block && savedKanjis.length > 0) {
        for (let i = 0; i < block.length; i++) {
          let a = block[i].querySelector(".meaning");
          if (
            a.textContent.toLowerCase().indexOf(searchQuery) > -1 ||
            a.textContent.toUpperCase().indexOf(searchQuery) > -1
          ) {
            block[i].style.display = "";
          } else {
            block[i].style.display = "none";
          }
        }
      } else {
        document.getElementById("display-vocab").innerHTML = "";
        document.getElementById("vocab-message").style.display = "block";
      }
    }
  );
}

// clear the entire list
const buttonClear = document.querySelector(".button-clear");
buttonClear.addEventListener("click", clearList);

// in case there are no kanjis saved display this
function noKanjis() {
  document.querySelector(".no-kanjis").innerHTML = `
    <article class="message is-info">
      <div class="message-body">
        <h4 >Your vocabulary list is currently empty</h4>
        <div class="bg-kitty bg-kitty__reading"></div>
        <p>You can save kanji characters to review later by clicking on the plus icon.</p>
      </div>
    </article>
    `;
}

function clearList() {
  const savedKanjis = [];
  chrome.storage.local.set(
    {
      savedKanjis: savedKanjis
    },
    function() {
      document.getElementById("display-vocab").innerHTML = "";
      noKanjis();
    }
  );
  location.reload();
}
