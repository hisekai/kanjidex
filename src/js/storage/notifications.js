
// notify when user deletes a kanji
function deletedKanji() {
    const deletedKanji = {
        type: "basic",
        iconUrl: "./assets/icons/icon_48_deleted.png",
        title: "Kanji successfully deleted.",
        message: "Kanji deleted."
    };
    chrome.notifications.create("deletedKanjiNotif", deletedKanji);
}

// notify when a user saves a kanji
function savedKanji() {
    const savedIt = {
        type: "basic",
        iconUrl: "./assets/icons/icon_48_saved.png",
        title: "Kanji successfully saved!",
        message: "Kanji successfully saved. Check the vocabulary page to see all the saved kanji characters."
    };
    chrome.notifications.create("hasSavedKanji", savedIt);
}

// notify when user already saved
function alreadySaved() {
    let alreadyExists = {
        type: "basic",
        iconUrl: "./assets/icons/icon_48_exists.png",
        title: "Kanji already saved",
        message: "Seems you already have this kanji saved."
    };
    chrome.notifications.create("alreadyExistsNotif", alreadyExists);
}

module.exports = {deletedKanji, savedKanji, alreadySaved}