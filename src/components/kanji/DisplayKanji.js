import React from "react";
import KanjiDetails from "./KanjiDetails";
import KanjiList from "./KanjiList";
import KawaiiCat from "../KawaiiCat";
import Info from "../layout/Info";

const DisplayKanji = ({ kanji, deleteKanji, queryType, mood, error }) => {
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
          <KanjiDetails kanji={kanji} />
        ) : (
          <KanjiList kanjis={kanji} deleteKanji={deleteKanji} />
        )
      ) : queryType === "kanji" ? (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>Hello, search for any kanji you like! </p>
            <p>You can also search for multiple kanji characters at once.</p>
          </Info>
        </div>
      ) : (
        <div className="has-text-centered">
          <KawaiiCat mood={mood} />
          <Info>
            <p>You can also search in English.</p>
          </Info>
        </div>
      )}
    </React.Fragment>
  );
};

export default DisplayKanji;
