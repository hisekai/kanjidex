const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();
const KanjiAlive = require("../kanjiAlive");
const kanjiAlive = new KanjiAlive();
const feather = require("feather-icons");
const playAudio = require("../play/audio");

function examplesUI(data) {
  const examplesCard = document.querySelector(".display__examples");
  // first check with kanjiAlive for examples
  kanjiAlive.getKanji(data).then(kanji => {
    if (kanji.examples) {
      let examplesArray = kanji.examples;
      let examples = examplesArray
        .map(example => {
          return `<div class="example">
            <a class="panel-block">
              <span class="panel-icon">
                ${feather.icons.play.toSvg()}
              </span>
              <audio>
                <source src="${example.audio.mp3}" type="audio/mpeg" />
              </audio>
              ${example.japanese}
              <br> ${example.meaning.english}
            </a>
          </div>`;
        })
        .join("");
      examplesCard.innerHTML = `
      <div class="card-content">
        <h2 class="card__title">
          Examples
        </h2>
        <div class="card__details">
          <div class="card__details__row">
            <div id="playlist" class="panel">
              ${examples}
            </div>
          </div>
        </div>
      </div>
    `;
      playAudio();
    } else {
      // if kanjiAlive has no record on the kanji
      // then try with jisho
      jisho.searchForExamples(data).then(result => {
        let examples = "<div>";
        for (let example in examples) {
          let example = result.results[example];
          examples += ` <div class="example">
              <a class="panel-block">
                ${example.kanji}
                <br>
                ${example.english}
              </a>
            </div>
          `;
        }
        examples += "</div>";
        examplesCard.innerHTML = `
        <div class="card-content">
          <h2 class="card__title">
            Examples
          </h2>
          <div class="card__details">
            <div class="card__details__row">
              <div id="playlist" class="panel">
                ${examples}
              </div>
            </div>
          </div>
        </div>
        `;
      });
    }
  });
}

module.exports = examplesUI;
