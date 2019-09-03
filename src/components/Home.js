import React, { useEffect, useState } from "react";
import nihongo from "nihongo";
import { getKanji } from "../helpers/getKanji";
import { getPhrase } from "../helpers/getPhrase";
import { getEnglish } from "../helpers/getEnglish";
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
    if (queryType === "kanji") {
      if (!nihongo.hasJapanese(query)) {
        setError("Your search doesn't seem to be in Japanese.");
        setMood("shocked");
      } else {
        if (query.length > 1) {
          let tempArray = [];
          const parsedQuery = nihongo.parseKanji(query);
          if (parsedQuery.length === 0) {
            setError("Your search doesn't contain any kanji characters.");
            setMood("shocked");
          } else {
            parsedQuery.forEach(async kanji => {
              setLoading(true);
              const data = await getKanji(kanji);
              tempArray.push(data);
              if (tempArray.length === parsedQuery.length) {
                setKanji(tempArray);
                setLoading(false);
              }
            });
          }
        } else {
          const data = await getKanji(query);
          setKanji(data);
        }
      }
    } else if (queryType === "phrase") {
      if (!nihongo.isJapanese(query)) {
        setError("Your search doesn't seem to be in Japanese.");
        setMood("shocked");
      } else {
        setLoading(true);
        const data = await getPhrase(query);
        data.meta.status === 200
          ? setPhrase(data.data)
          : setError("Unfortunately, there is no data for your search.");
        setMood("sad");
        setLoading(false);
      }
    } else if (queryType === "english") {
      if (nihongo.isJapanese(query)) {
        setError(
          "Your search is in Japanese. This form is for searching in English."
        );
        setMood("shocked");
      } else {
        let tempArray = [];
        setLoading(true);
        const englishData = await getEnglish(query.toLowerCase());
        englishData.forEach(async kanji => {
          const data = await getKanji(kanji.kanji.character);
          tempArray.push(data);
          if (tempArray.length === englishData.length) {
            if (tempArray.length === 1) {
              setKanji(tempArray[0]);
            } else if (tempArray.length > 1) {
              setKanji(tempArray);
            } else {
              setError("Unfortunately, there is no data for this search.");
              setMood("sad");
            }
          }
        });
        setLoading(false);
      }
    }
  };
  const handleQueryType = value => {
    setQueryType(value);
    setError("");
    setQuery("");
    setKanji([]);
    setPhrase([]);
  };
  const deleteKanji = item => {
    setKanji(kanji.filter(kanji => kanji.kanji.query !== item));
  };
  useEffect(() => {
    setMood("happy");
  }, [kanji, phrase, error]);
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
        <DisplayPhrase phrase={phrase} mood={mood} error={error} />
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
