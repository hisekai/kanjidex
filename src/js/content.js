const tippy = require("tippy.js");

function showInfo(kanji) {
  removeTooltips();
  // create span element
  // to wrap the window selection
  const tooltip = document.createElement("span");
  tooltip.id = "kanjidex-tooltip";
  // get the window selection and wrap created span
  window
    .getSelection()
    .getRangeAt(0)
    .surroundContents(tooltip);

  // create a div to display the info inside of a tooltip
  const kanjiTemplate = document.createElement("div");
  kanjiTemplate.id = "myTemplate";
  kanjiTemplate.innerHTML = `
    <p class="tippy-content">
     
    </p>
    `;
  document.body.appendChild(kanjiTemplate);
  tippy("#kanjidex-tooltip", {
    html: "#myTemplate",
    arrow: true,
    theme: "kanjidex"
  });
  tooltip._tippy.popper.querySelector(".tippy-content").innerHTML = `
  <div class="kanjidex">
    <div class="kanjidex-kanji">
      ${kanji.query}
    </div>
    <div class="kanjidex-details">
      <div class="kanjidex-main">
        <div class="row">
          <h2 class="kanjidex-meaning"><span>Meaning:</span> ${
    kanji.meaning
    }</h2>
        </div>
        <div class="row">
          <span>Onyomi:</span> ${kanji.onyomi}
        </div>  
        <div class="row">
          <span>Kunyomi:</span> ${kanji.kunyomi}
        </div>
        <div class="row">
          <span>Radical:</span> ${kanji.radical.symbol} (${
    kanji.radical.meaning
    })
        </div>
      </div>
      <div class="kanjidex-stroke-order">
        <img src="${kanji.strokeOrderDiagramUri}" alt="${kanji.meaning}">  
      </div>
    </div>
  </div>
  `;

  tooltip._tippy.show();
}

function removeTooltips() {
  const popper = document.getElementById("kanjidex-tooltip");
  if (popper) {
    popper._tippy.destroy();
    popper.removeAttribute("id");
  }
}

// when Kanjidex gets message from background about the highlighted kanji
// display the tooltip with kanji details
chrome.extension.onMessage.addListener(function (message) {
  if (message.details == "showInfo") {
    showInfo(message.kanji);
  }
});
