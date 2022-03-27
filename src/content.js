/* global chrome */
import tippy from "tippy.js";

function wrapSelectedText() {
  if (!document.querySelector(".kanjidex-wrapper")) {
    let selection = window.getSelection().getRangeAt(0);
    let selectedText = selection.extractContents();
    let span = document.createElement("span");
    span.classList.add("kanjidex-wrapper");
    span.appendChild(selectedText);
    selection.insertNode(span);
  }
}

function showInfo(kanji) {
  // get the kanji character
  const regex = new RegExp(`(${kanji.query})`);
  // first check if there's already a span with kanjidex-wrapper class
  // if yes, remove the class
  if (document.querySelector(".kanjidex-wrapper")) {
    let targetEl = document.querySelector(".kanjidex-wrapper");
    targetEl.classList.remove("kanjidex-wrapper");
  }
  // wrap the selection with kanjidex-wrapper
  wrapSelectedText();
  // change the content to add information
  let content = document.querySelector(".kanjidex-wrapper");
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
      }</p><p class='kanjidex-info'><img src='//images.weserv.nl/?url=${kanji.strokeOrderDiagramUri.replace(
        /(^\w+:|^)\/\//,
        ""
      )}' alt='${kanji.meaning}' /></p></div></div>">${part}</span>`;
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
}

// when Kanjidex gets message from background about the highlighted kanji
// display the tooltip with kanji details

chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === "showKanji") {
    showInfo(message.kanji);
  }
});
