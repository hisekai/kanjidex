/* global chrome */
export const deletedNotification = (type = "kanji") => {
  const deletedItem = {
    type: "basic",
    iconUrl: "./icons/notification-trash.png",
    title: `${type === "kanji" ? "Kanji" : "Word"} successfully deleted.`,
    message: `${type === "kanji" ? "Kanji" : "Word"} deleted.`,
  };
  chrome.notifications.create("deletedItemNotif", deletedItem);
};

export const savedNotification = (type = "kanji") => {
  const savedIt = {
    type: "basic",
    iconUrl: "./icons/notification-save.png",
    title: `${type === "kanji" ? "Kanji" : "Word"} successfully saved!`,
    message: `${
      type === "kanji" ? "Kanji" : "Word"
    } successfully saved. Check the vocabulary page to see all the saved ${
      type === "kanji" ? "kanji characters" : "words"
    }.`,
  };
  chrome.notifications.create("hasSavedIt", savedIt);
};

export const alreadySavedNotification = (type = "kanji") => {
  let alreadySaved = {
    type: "basic",
    iconUrl: "./icons/notification-warning.png",
    title: `${type === "kanji" ? "Kanji" : "Word"} already saved`,
    message: `Seems you already have this ${
      type === "kanji" ? "kanji character" : "word"
    } saved.`,
  };
  chrome.notifications.create("alreadySavedNotif", alreadySaved);
};

export const removedAllNotification = (type = "kanji") => {
  let removedAll = {
    type: "basic",
    iconUrl: "./icons/notification-trash.png",
    title: "Removed All",
    message: `You have removed all ${
      type === "kanji" ? "kanji characters" : "words"
    } in this deck`,
  };
  chrome.notifications.create("removedAllNotif", removedAll);
};
