import jishoAPI from "unofficial-jisho-api";
const jisho = new jishoAPI();

const proxy = "https://cors-anywhere.herokuapp.com/";

export const getPhrase = async phrase => {
  const word = phrase;
  let url;
  if (process.env.NODE_ENV !== "production") {
    url = proxy + jisho.getUriForPhraseSearch(word);
  } else {
    url = jisho.getUriForPhraseSearch(word);
  }

  const response = await fetch(url);
  const json = await response.json();
  return json;
};
