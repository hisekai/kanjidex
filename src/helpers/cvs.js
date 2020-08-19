import Papa from "papaparse";

// create and download a cvs file for Anki
export const getCVS = (deckTitle, kanjis, phrases) => {
  const fields = ["Japanese", "Meaning"];
  let dataArray = [];
  kanjis.forEach((kanji) => {
    dataArray.push({
      Japanese: `<h1>${kanji.kanji.query} </h1>`,
      Meaning: `<h2>Meaning: ${kanji.kanji.meaning}</h2> <h4>JLPT: ${
        kanji.kanji.jlptLevel
      } </h4> <h4>Strokes: ${
        kanji.kanji.strokeCount
      } </h4> <h4> Parts: ${kanji.kanji.parts.join(", ")}  </h4> <h4>Radical: ${
        kanji.kanji.radical.symbol
      } </h4>`,
    });
  });

  phrases.forEach((phrase) => {
    console.log(phrase);
    dataArray.push({
      Japanese: `<h1>${phrase.japanese[0].word}</h1> <h2>${phrase.japanese[0].reading}</h2>`,
      Meaning: `<h2>${phrase.senses.map((sense) =>
        sense.english_definitions.join(", ")
      )}</h2> <h4>${phrase.senses.map((sense) =>
        sense.parts_of_speech.join(" ")
      )}</h4>`,
    });
  });
  let csv = Papa.unparse(
    {
      fields,
      data: dataArray,
    },
    {
      quotes: false,
      quoteChar: '"',
      escapeChar: '"',
      delimiter: ",",
      header: false,
      newline: "\n",
    }
  );
  // create the cvs file
  function download_csv() {
    let hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = `${deckTitle}.cvs`;
    hiddenElement.click();
  }
  download_csv();
};
