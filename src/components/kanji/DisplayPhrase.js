import React from "react";
import Phrase from "../Phrase";
import KawaiiCat from "../KawaiiCat";
import Info from "../layout/Info";

const DisplayPhrase = ({ phrase, mood, error, setPhrase }) => {
  return (
    <React.Fragment>
      {phrase.length >= 1 ? (
        <Phrase phrase={phrase} setPhrase={setPhrase} />
      ) : (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>You can also search for words.</p>
            <p>
              For example, <strong>日</strong> means day and <strong>本</strong>{" "}
              means book, but together, <strong>日本</strong> means Japan.
            </p>
          </Info>
        </div>
      )}
    </React.Fragment>
  );
};

export default DisplayPhrase;
