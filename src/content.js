/* global chrome */
import tippy from "tippy.js";

function showInfo(kanji) {
  // get the kanji character
  const regex = new RegExp(`(${kanji.query})`);
  const selection = window.getSelection();
  const content = selection.anchorNode.parentElement;
  // split the parent element of the selection
  let parts = content.innerHTML.split(regex);

  let result = parts.map((part) => {
    if (part.match(regex) && part.indexOf("span") > -1) {
      return part;
    }

    // return the matching kanji with a wrapped span and the template with the basic info about the kanji
    if (part.match(regex)) {
      return `<span class="kanjidex-tooltip" data-tippy-content="<div class='row'><div class='main-info'><p class='kanjidex-title'><strong>Meaning: </strong> ${
        kanji.meaning
      }</p><p class='kanjidex-info'><strong>Onyomi: </strong>${
        kanji.onyomi.length > 0 ? kanji.onyomi : "not found"
      }</p><p class='kanjidex-info'><strong>Kunyomi: </strong>${
        kanji.kunyomi.length > 0 ? kanji.kunyomi : "not found"
      }</p><p class='kanjidex-info'><img src='//images.weserv.nl/?url=${
        kanji.strokeOrderDiagramUri
      }' alt='${kanji.meaning}' /></p></div></div>">${part}</span>`;
    }

    return part;
  });
  // turn array into regular string
  result = result.join(" ");
  content.innerHTML = result;

  // initiate tippy
  tippy("[data-tippy-content]", {
    allowHTML: true,
    theme: "kanjidex",
    maxWidth: 450,
    placement: "auto",
    role: "tooltip",
  });
  console.log(kanji);
}

// when Kanjidex gets message from background about the highlighted kanji
// display the tooltip with kanji details
chrome.extension.onMessage.addListener(function (message) {
  if (message.action === "showKanji") {
    showInfo(message.kanji);
  }
});
