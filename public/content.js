// when Kanjidex gets message from background about the highlighted kanji
// display the tooltip with kanji details
chrome.extension.onMessage.addListener(function(message) {
  if (message.action == "showKanji") {
    console.log("this is content script kanji: ", message.kanji);
  }
});
