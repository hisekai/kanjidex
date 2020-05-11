import React from "react";
import Phrase from "./Phrase";
import KawaiiCat from "../KawaiiCat";
import Info from "../layout/Info";

const DisplayPhrase = ({ phrase, mood, error, setPhrase, setMood }) => {
  return error ? (
    <div className="has-text-centered">
      <KawaiiCat mood={mood} />
      <Info>
        <p>{error}</p>
      </Info>
    </div>
  ) : (
    <React.Fragment>
      {phrase.length >= 1 ? (
        <Phrase phrase={phrase} setPhrase={setPhrase} setMood={setMood} />
      ) : (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>You can also search for words.</p>
            <p>
              For example, <strong>日</strong> means day and <strong>本</strong>{" "}
              means book, but together, <strong>日本</strong> means Japan.
            </p>
            <p>
              You can search for words in <strong>hiragana</strong>,{" "}
              <strong>katakana</strong>, and <strong>kanji</strong> or a
              combination of any of them.
            </p>
          </Info>
        </div>
      )}
    </React.Fragment>
  );
};

export default DisplayPhrase;
