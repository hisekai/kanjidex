/*global chrome*/
import React, { useEffect, useState } from "react";
import { search } from "../helpers/search";
import SearchForm from "./SearchForm";
import Loader from "./layout/Loader";
import DisplayKanji from "./kanji/DisplayKanji";
import DisplayPhrase from "./kanji/DisplayPhrase";

const Home = () => {
  const [kanji, setKanji] = useState([]);
  const [phrase, setPhrase] = useState([]);
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("kanji");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mood, setMood] = useState("happy");
  const handleSubmit = async e => {
    e.preventDefault();
    if (query) {
      search(
        queryType,
        setError,
        setMood,
        setLoading,
        setKanji,
        setPhrase,
        query
      );
    } else {
      setError("Sorry, but you haven't entered anything!");
    }
  };
  const handleQueryType = value => {
    setQueryType(value);
    setError("");
  };
  const deleteKanji = item => {
    setKanji(kanji.filter(kanji => kanji.kanji.query !== item));
  };
  useEffect(() => {
    setMood("happy");
  }, [kanji, phrase, error]);

  // chrome specific
  // when user selects text upon browser action
  // immediately start search for the selection
  if (process.env.NODE_ENV === "production") {
    chrome.tabs.executeScript(
      {
        code: "window.getSelection().toString();"
      },
      function(selection) {
        window.onload = async function(e) {
          if (selection) {
            const selectedText = selection[0];
            if (selectedText.length > 0) {
              const input = document.getElementById("main-search");
              input.setAttribute("value", selection[0]);
              input.focus();
              search(
                queryType,
                setError,
                setMood,
                setLoading,
                setKanji,
                setPhrase,
                selectedText
              );
            }
          }
        };
      }
    );
  }

  return (
    <div className="column is-half is-offset-one-quarter">
      <SearchForm
        query={query}
        setQuery={setQuery}
        setMood={setMood}
        queryType={queryType}
        handleSubmit={handleSubmit}
        handleQueryType={handleQueryType}
      />
      {loading && <Loader />}
      {!loading && queryType === "kanji" && (
        <DisplayKanji
          kanji={kanji}
          deleteKanji={deleteKanji}
          queryType={queryType}
          mood={mood}
          error={error}
        />
      )}
      {!loading && queryType === "phrase" && (
        <DisplayPhrase
          phrase={phrase}
          mood={mood}
          error={error}
          setPhrase={setPhrase}
        />
      )}
      {!loading && queryType === "english" && (
        <DisplayKanji
          kanji={kanji}
          deleteKanji={deleteKanji}
          queryType={queryType}
          mood={mood}
          error={error}
        />
      )}
    </div>
  );
};

export default Home;
