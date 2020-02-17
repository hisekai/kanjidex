/* global chrome */

export const deletedNotification = () => {
  const deletedKanji = {
    type: "basic",
    iconUrl: "./icons/notification-trash.png",
    title: "Kanji successfully deleted.",
    message: "Kanji deleted."
  };
  console.log(deletedKanji.iconUrl);
  chrome.notifications.create("deletedKanjiNotif", deletedKanji);
};

export const savedNotification = () => {
  const savedIt = {
    type: "basic",
    iconUrl: "./icons/notification-save.png",
    title: "Kanji successfully saved!",
    message:
      "Kanji successfully saved. Check the vocabulary page to see all the saved kanji characters."
  };
  chrome.notifications.create("hasSavedKanji", savedIt);
};

export const alreadySavedNotification = () => {
  let alreadySaved = {
    type: "basic",
    iconUrl: "./icons/notification-warning.png",
    title: "Kanji already saved",
    message: "Seems you already have this kanji saved."
  };
  chrome.notifications.create("alreadySavedNotif", alreadySaved);
};

export const removedAllNotification = () => {
  let removedAll = {
    type: "basic",
    iconUrl: "./icons/notification-trash.png",
    title: "Removed All",
    message: "You have removed all kanji characters in this deck"
  };
  chrome.notifications.create("removedAllNotif", removedAll);
};
