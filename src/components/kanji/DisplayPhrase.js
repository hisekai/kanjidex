import React from "react";
import Phrase from "../Phrase";
import KawaiiCat from "../KawaiiCat";
import Info from "../layout/Info";

const DisplayPhrase = ({ phrase, mood, error }) => {
  return (
    <React.Fragment>
      {phrase.length >= 1 ? (
        <Phrase phrase={phrase} />
      ) : (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>You can also search for words.</p>
          </Info>
        </div>
      )}
    </React.Fragment>
  );
};

export default DisplayPhrase;
