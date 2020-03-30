import React, { useState } from "react";
import KanjiDetails from "./KanjiDetails";
import KanjiList from "./KanjiList";
import KawaiiCat from "../KawaiiCat";
import Info from "../layout/Info";
import KanjiActions from "./KanjiActions";

const DisplayKanji = ({
  kanji,
  setKanji,
  deleteKanji,
  queryType,
  mood,
  error
}) => {
  const handleView = () => {
    setKanji([]);
  };
  return error ? (
    <div className="has-text-centered">
      <KawaiiCat mood={mood} />
      <Info>
        <p>{error}</p>
      </Info>
    </div>
  ) : (
    <React.Fragment>
      {Object.keys(kanji).length ? (
        "kanji" in kanji ? (
          <div style={{ position: "relative" }}>
            <KanjiActions handleView={handleView} kanji={kanji} />
            <KanjiDetails kanji={kanji} />
          </div>
        ) : (
          <KanjiList kanjis={kanji} deleteKanji={deleteKanji} />
        )
      ) : queryType === "kanji" ? (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>Hello, search for any kanji you like! </p>
            <p>You can also search for multiple kanji characters at once.</p>
            <p>
              You can always check your vocabulary list on{" "}
              <a
                target="_blank"
                className="vocab-icon"
                href="./index.html#/kanjidex/vocabulary"
              >
                this link
              </a>{" "}
              as well as get{" "}
              <a
                target="_blank"
                className="vocab-icon"
                href="./index.html#/kanjidex/help"
              >
                help on this link
              </a>
              .
            </p>
          </Info>
        </div>
      ) : (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>
              You can also search in English <br /> but only one word at the
              time.
            </p>
          </Info>
        </div>
      )}
    </React.Fragment>
  );
};

export default DisplayKanji;
