// import style
import "../scss/style.scss";

const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();
const KanjiAlive = require("./kanjiAlive");
const kanjiAlive = new KanjiAlive();
const UI = require("./UI/ui.js");
const ui = new UI();
const storage = require("./storage/storage");
const nihongo = require("nihongo");
const displayResults = require("./UI/results");
const switchForms = require("./UI/switch");

document.addEventListener("DOMContentLoaded", function() {
  if (navigator.onLine) {
    // display the initial greeting page
    ui.displayStart();
    // make the form interactive
    switchForms();
    // Search input
    const searchKanji = document.getElementById("search__kanji");
    const searchEnglish = document.getElementById("search__english");

    // search for japanese query
    searchKanji.addEventListener("keyup", e => {
      const searchInput = searchKanji.value;
      const panelResults = document.querySelector(".panel-results");
      panelResults.innerHTML = ``;
      // Check if empty
      if (searchInput !== "") {
        const inputHas = nihongo.contains(searchInput);
        // test to see if the user input is a kanji character
        if (inputHas.kanji) {
          const query = nihongo.parseKanji(searchInput);
          // if single kanji character then display instantly
          if (query.length === 1) {
            const singleKanji = query.toString();
            ui.displayKanjiDetails(singleKanji);
          } else {
            ui.hideStart();
            // temporarily add the query to local storage
            storage.addToStorage(query);
            // then display the results
            displayResults("tempSearchResults");
          }
        } else {
          ui.displayNotKanji();
        }
      } else {
        ui.displayStart();
      }
    });

    // Search for english query
    searchEnglish.addEventListener("keyup", e => {
      ui.displayStart();
      const searchInput = searchEnglish.value;
      const panelResults = document.querySelector(".panel-results");
      panelResults.innerHTML = ``;
      if (searchInput !== "") {
        // check if input is in japanese by mistake
        if (nihongo.isJapanese(searchInput)) {
          ui.displayNotEnglish();
        } else {
          // if not use kanjiAlive to get data
          kanjiAlive.getEnglish(searchInput).then(query => {
            // if single result, display immediately
            if (query.length > 0) {
              ui.hideStart();
              if (query.length === 1) {
                const kanji = query[0].kanji.character;
                ui.displayKanjiDetails(kanji);
              } else {
                ui.hideStart();
                const tempArray = [];
                for (let kanji in query) {
                  tempArray.push(query[kanji].kanji.character);
                }
                storage.addToStorage(tempArray);
                displayResults("tempSearchResults");
              }
            } else {
              ui.displayNotFound();
            }
          });
        }
      } else {
        ui.displayStart();
      }
    });

    // Function to populate the input field on window selection
    // and automatically have the kanji display with dispatchEvent
    chrome.tabs.query(
      {
        currentWindow: true, //Filters tabs in current window
        status: "complete", //The Page is completely loaded
        active: true // The tab or web page is browsed at this state,
      },
      function(tabs) {
        let url = tabs[0].url;
        let chromePattern = /^((chrome|chrome-extension):\/\/)/;
        if (!chromePattern.test(url)) {
          chrome.tabs.executeScript(
            {
              code: "window.getSelection().toString();"
            },
            function(selection) {
              if (selection) {
                const input = document.getElementById("search__kanji");
                if (input) {
                  let keyupEvent = new Event("keyup");
                  input.value = selection[0];
                  input.dispatchEvent(keyupEvent);
                }
              }
            }
          );
        }
      }
    );
  } else {
    ui.userOffline();
  }
});
