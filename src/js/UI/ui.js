const kanjiUI = require("./kanji");
const radicalUI = require("./radical");
const examplesUI = require("./examples");
const notKanji = require("../error/notKanji");
const notEnglish = require("../error/notEnglish");
const notFound = require("../error/notFound");
const start = require("./startPage");

class UI {
  displayKanji(data) {
    kanjiUI(data);
  }
  displayRadical(data) {
    radicalUI(data);
  }
  displayExamples(data) {
    examplesUI(data);
  }
  displayNotKanji() {
    notKanji();
  }
  displayNotEnglish() {
    notEnglish();
  }
  displayNotFound() {
    notFound();
  }
  displayStart() {
    start.start();
  }
  showStart() {
    start.show();
  }
  hideStart() {
    start.hide();
  }
  userOffline() {
    start.isOffline();
  }
  // displays all of the kanji details at once
  displayKanjiDetails(data) {
    this.hideStart();
    this.displayKanji(data);
    this.displayRadical(data);
    this.displayExamples(data);
  }
}

module.exports = UI;
