import React from "react";
import Kanji from "./Kanji";
import Radical from "../kanji/Radical";
import Examples from "../kanji/Examples";

const CurrentKanji = ({ kanji, radical, examples }) => {
  return (
    <div className="columns is-multiline">
      <div className="column">
        <p class="subtitle is-4 has-text-grey-light">Kanji</p>
        <Kanji kanji={kanji} />
      </div>
      <div className="column">
        <p
          class="subtitle is-4 has-text-grey-light"
          style={{ marginBottom: "65px" }}
        >
          Radical
        </p>
        <Radical radical={radical} />
      </div>
      <div className="column">
        <p class="subtitle is-4 has-text-grey-light">Examples</p>
        <div
          className="Examples-vocabulary"
          style={{
            height: "60vh !important",
            overflowY: "scroll",
            maxHeight: "520px",
          }}
        >
          <Examples examples={examples} />
        </div>
      </div>
    </div>
  );
};

export default CurrentKanji;
