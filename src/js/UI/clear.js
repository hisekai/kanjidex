// clear the elements
module.exports = function clear() {
  // clear any saved search results
  chrome.storage.local.set({
    tempSearchResults: []
  });
  const kanjiDetails = document.querySelector(".display__kanji-details");
  const displayResults = document.querySelector(".display__temporary");
  const toRemove = document.querySelector(".button-add-to-vocab-list");
  // make sure 
  if (displayResults) {
    displayResults.style.display = "none";
  }
  // hide kanji details
  if (kanjiDetails) {
    kanjiDetails.style.display = "none";
  }
  // remove the add to vocab button from prior searches if any
  if (toRemove) {
    toRemove.remove();
  }
}