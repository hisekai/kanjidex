import jishoAPI from "unofficial-jisho-api";
import rp from "request-promise";
const jisho = new jishoAPI();

const API_KEY = process.env.REACT_APP_API_KEY;

let proxy;
let url;
if (process.env.NODE_ENV !== "production") {
  proxy = "https://cors-anywhere.herokuapp.com/";
}

const getKanjiFromKanjiAlive = async kanji => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
      "x-rapidapi-key": `${API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};

const getKanjiFromJisho = async kanji => {
  if (process.env.NODE_ENV !== "production") {
    url = proxy + jisho.getUriForKanjiSearch(kanji);
  } else {
    url = jisho.getUriForKanjiSearch(kanji);
  }

  const jishoRes = await rp(url).then(body => {
    let data = jisho.parseKanjiPageHtml(body, kanji);
    return data;
  });
  return jishoRes;
};

const getRadical = async radical => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${radical}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
      "x-rapidapi-key": `${API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};

const getExamples = async kanji => {
  if (process.env.NODE_ENV !== "production") {
    url = proxy + jisho.getUriForExampleSearch(kanji);
  } else {
    url = jisho.getUriForExampleSearch(kanji);
  }
  const jishoExamples = await rp(url).then(body => {
    let data = jisho.parseExamplePageHtml(body, kanji);
    return data;
  });
  return jishoExamples;
};

export const getKanji = async kanji => {
  // get data from kanji alive
  const kanjiAliveData = await getKanjiFromKanjiAlive(kanji);
  // get data from jisho
  const jishoResData = await getKanjiFromJisho(kanji);
  let radical;
  let examples;

  // if kanji alive doesn't have data for the radical and examples then search again with jisho
  if (kanjiAliveData.error) {
    radical = await getRadical(jishoResData.radical.symbol);
    radical = radical.radical;
    examples = await getExamples(kanji);
  } else {
    radical = kanjiAliveData.radical;
    examples = kanjiAliveData.examples;
  }

  const data = { kanji: jishoResData, radical, examples };
  return data;
};
