const notifications = require("./notifications");

// check for storage
// if there is anything stored in the temp storage
// create a button and display it
function getStorage(storageType) {
  return new Promise(resolve => {
    chrome.storage.local.get(storageType, function(results) {
      resolve(results);
    });
  });
}

// add multiple kanji query to temporary local storage
function addToStorage(data) {
  let tempSearchResults = [...new Set(data)];
  chrome.storage.local.set({
    tempSearchResults: tempSearchResults
  });
}

// remove kanji from the storage
function removeFromStorage(storageType, kanji) {
  if (storageType === "savedKanjis") {
    chrome.storage.local.get("savedKanjis", function(result) {
      let listOfKanjis = result.savedKanjis;
      let newList = listOfKanjis.filter(item => {
        return item != kanji;
      });
      chrome.storage.local.set({ savedKanjis: newList });
    });
  }
}

function saveKanji(kanji) {
  chrome.storage.local.get(
    {
      savedKanjis: []
    },
    function(result) {
      let savedKanjis = result.savedKanjis;
      if (!savedKanjis.includes(kanji)) {
        savedKanjis.push(kanji);
        // set the new array value to the same key
        chrome.storage.local.set({
          savedKanjis: savedKanjis
        });
        // notify the user that the kanji has been saved
        notifications.savedKanji();
      } else {
        // tell the user that the kanji is already saved
        notifications.alreadySaved();
      }
    }
  );
}

module.exports = { getStorage, addToStorage, removeFromStorage, saveKanji };
