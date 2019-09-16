// create a contextMenu so that
// the user can rightclick
// and search the highlighted kanji character
chrome.contextMenus.create({
  id: "kanjidex-tooltip",
  title: "Search with Kanjidex",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info) {
  //   console.log(info.selectionText);
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "showKanji",
        kanji: info.selectionText
      });
    }
  );
});
