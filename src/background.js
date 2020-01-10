/* global chrome */
const nihongo = require("nihongo");
const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();

function getInfo(kanjis, tabId) {
  kanjis.forEach(kanji => {
    jisho.searchForKanji(kanji).then(result => {
      chrome.tabs.sendMessage(tabId, {
        action: "showKanji",
        kanji: result
      });
    });
  });
}

// create a contextMenu so that
// the user can rightclick
// and search the highlighted kanji character
chrome.contextMenus.create({
  id: "kanjidex-tooltip",
  title: "Search with Kanjidex",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      getInfo(nihongo.parseKanji(info.selectionText), tabs[0].id);
    }
  );
});
