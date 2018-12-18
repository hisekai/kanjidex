const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();
const KanjiAlive = require("../kanjiAlive");
const kanjiAlive = new KanjiAlive();
const playSVG = require("../play/SVG");
const feather = require("feather-icons");

// UI for displaying the radical
function display(radical, radicalForms) {
  const radicalCard = document.querySelector(".display__radical");
  if (!radical) {
    radicalCard.innerHTML = `
    <div class="not-found">
      <div class="bg-kitty bg-kitty__sad"></div>
      <h3>Not found</h3>
      <p>Sorry, no radical found for this particular kanji.</p>
    </div>
    `;
    return;
  }
  // animate the svg
  const animation = radical.animation;
  let animationSVG = "";
  animation.map(svg => {
    return (animationSVG += svg + ";");
  });
  // radical position
  const positionIcon = radical.position.icon;
  const position = positionIcon ? `<img src = ${positionIcon} />` : "Not found";
  radicalCard.innerHTML = `
    <div class="card-image">
      <figure class="has-text-centered">
        <div class="svg-box">
          <svg version="1.1" baseProfile="tiny" id="svg-root" width="109px" height="109px" viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">

          <image width="420" height="440" xlink:href="${radical.image}">
          <animate attributeName="xlink:href" values="${animationSVG}"
                          begin="0s" repeatCount="indefinite" dur="5s" />
          </image>
          </svg>
        </div>
        <div class="controls">
          <button class="button play-svg">
            ${feather.icons.play.toSvg()}
          </button>
        </div>
      </figure>
    </div>
    <div class="card-content">
      <!-- kanji meaning -->
      <h2 class="card__title">
        ${radical.meaning.english ? radical.meaning.english : "Not found"}
      </h2>
      <!-- end kanji meaning -->
      <!-- kanji details -->
      <div class="card__details">
        <div class="card__details__row">
          <div class="card__details__item card__details__item">
            <span>Strokes: </span>
            ${radical.strokes ? radical.strokes : "Not found"}
          </div>
        </div>
        <div class="card__details__row">
          <div class="card__details__item">
            <span>Hiragana: </span>
            ${radical.name.hiragana ? radical.name.hiragana : "Not found"}
          </div>
        </div>
        <div class="card__details__row">
          <div class="card__details__item">
            <span>Romaji: </span>
            ${radical.name.romaji ? radical.name.romaji : "Not found"}
          </div>
        </div>
        <div class="card__details__row">
          <div class="card__details__item">
            <span>Radical Forms: </span>
            ${radicalForms ? radicalForms.join(", ") : "Not found"}
          </div>
        </div>
      </div>`;
  // for radical animation
  playSVG();
}

function radicalUI(kanji) {
  // First get the radical character/symbol from the unofficial jisho api
  jisho.searchForKanji(kanji).then(kanji => {
    let radicalSymbol = kanji.radical.symbol;
    let radicalForms = kanji.radical.forms;
    // then use the radical symbol to get the data from the kanji alive api
    kanjiAlive.getKanji(radicalSymbol).then(radical => {
      let result = radical.radical;
      display(result, radicalForms);
    });
  });
}

module.exports = radicalUI;
