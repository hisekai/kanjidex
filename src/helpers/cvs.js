import Papa from "papaparse";

const notes = (notes) => {
  let res = "";
  notes.map((note) => {
    if (note.img) {
      res += `<img src=${note.img} />`;
    }
    res += `<p>${note.text}</p>`;
  });
  return res;
};

// create and download a cvs file for Anki
export const getCVS = (kanjis, phrases) => {
  const fields = ["Japanese", "Details"];
  let dataArray = [];
  kanjis.length > 0 &&
    kanjis.forEach((kanji) => {
      dataArray.push({
        Japanese: `<p style='font-size:60px;'>${kanji.kanji.query} </p>`,
        Details: `<h2>Meaning: ${kanji.kanji.meaning}</h2> <h4>JLPT: ${
          kanji.kanji.jlptLevel
        } </h4> <h4>Strokes: ${
          kanji.kanji.strokeCount
        } </h4> <h4> Parts: ${kanji.kanji.parts.join(
          ", "
        )}  </h4> <h4>Radical: ${kanji.kanji.radical.symbol} </h4> ${
          kanji.kanji.notes ? notes(kanji.kanji.notes) : ""
        } `,
      });
    });

  phrases.length > 0 &&
    phrases.forEach((phrase) => {
      dataArray.push({
        Japanese: `<p style='font-size:60px;'>${
          phrase.japanese[0].word ? phrase.japanese[0].word : ""
        }</p> <h2 style="color:DarkSlateGrey">${
          phrase.japanese[0].reading ? phrase.japanese[0].reading : ""
        }</h2>`,
        Details:
          phrase.senses &&
          phrase.senses
            .map(
              (sense) =>
                `<h5 style="color:grey">${sense.parts_of_speech.join(
                  " "
                )}</h5> \n <h2>${sense.english_definitions.join(", ")}</h2>`
            )
            .concat(phrase.notes ? notes(phrase.notes) : "")
            .join(" "),
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
    hiddenElement.download = `kanjidex-${new Date().getTime()}.cvs`;
    hiddenElement.click();
  }
  download_csv();
};
