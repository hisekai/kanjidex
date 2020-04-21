/* global chrome */

// use index number instead!
function showInfo(kanji) {
  // create template to display kanji info in the tooltip
  const template = `<div class="kanjidex">
  <div class="kanjidex-kanji">
    ${kanji.query}
  </div>
  <div class="kanjidex-details">
    <div class="kanjidex-main">
      <div class="row">
        <h4 class="kanjidex-meaning"><span>Meaning:</span> ${kanji.meaning}</h4>
      </div>
      <div class="row">
        <span>Onyomi:</span> ${kanji.onyomi}
      </div>  
      <div class="row">
        <span>Kunyomi:</span> ${kanji.kunyomi}
      </div>
      <div class="row">
        <span>Radical:</span> ${kanji.radical.symbol} (${kanji.radical.meaning})
      </div>
    </div>
    <div class="kanjidex-stroke-order">
    <img src="//images.weserv.nl/?url=${kanji.strokeOrderDiagramUri}" alt="${kanji.meaning}">
    </div>
  </div>
</div>`;
  // create a random id for the tooltip
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

    if (part.match(regex)) {
      return `<span class='kanjidex-tooltip' style='border-bottom: dashed 1px indianred'>${part} <span class="kanjidex-tooltip__content">${template}</span></span>`;
    }

    return part;
  });
  // turn array into regular string
  result = result.join(" ");
  content.innerHTML = result.toString();
}

// when Kanjidex gets message from background about the highlighted kanji
// display the tooltip with kanji details
chrome.extension.onMessage.addListener(function (message) {
  if (message.action === "showKanji") {
    showInfo(message.kanji);
  }
});
