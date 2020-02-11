import React, { useContext, useState } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import { SpeechBubble } from "react-kawaii";
import { Search, Eye, Trash2 } from "react-feather";
import CurrentKanji from "./CurrentKanji";

const DeckDetails = props => {
  const { decks, dispatch } = useContext(VocabContext);
  const deckId = props.match.params.id;
  const deck = decks.filter(deck => deck.id === deckId)[0];
  const [currentKanji, setCurrentKanji] = useState();
  const [value, setValue] = useState("");
  const handleRemove = kanji => {
    dispatch({
      type: "REMOVE_KANJI",
      deck: { id: deckId, kanji: kanji.kanji.query }
    });
    setCurrentKanji();
  };
  const list = deck.kanjis
    .filter(k => value === "" || k.kanji.meaning.includes(value))
    .map(kanji => {
      return (
        <div class="panel-block" style={{ justifyContent: "space-between" }}>
          <span class="panel-icon">{kanji.kanji.query}</span>
          {kanji.kanji.meaning}
          <div class="field has-addons">
            <p class="control">
              <button
                class="button is-info is-outlined"
                onClick={() => setCurrentKanji(kanji)}
              >
                <span class="icon is-small">
                  <Eye />
                </span>
              </button>
            </p>
            <p class="control">
              <button
                class="button is-danger is-outlined"
                onClick={() => handleRemove(kanji)}
              >
                <span class="icon is-small">
                  <Trash2 />
                </span>
              </button>
            </p>
          </div>
        </div>
      );
    });
  return deck.kanjis.length > 0 ? (
    <div className="Deck-details container">
      <h2 className="title has-text-centered">
        <strong>Deck: </strong>
        {deck.title}
      </h2>
      <hr />
      <div className="columns">
        <div className="column is-one-quarter">
          <nav class="panel">
            <p class="panel-heading">Currently Saved Kanji</p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Search"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <span class="icon is-left">
                  <Search />
                </span>
              </p>
            </div>
            {list}
            <div class="panel-block">
              <button
                class="button is-danger is-outlined is-fullwidth"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_ALL_KANJI",
                    deck: { id: deckId }
                  })
                }
              >
                Remove All
              </button>
            </div>
          </nav>
        </div>
        <div className="column">
          {currentKanji ? (
            <CurrentKanji
              kanji={currentKanji.kanji}
              radical={currentKanji.radical}
              examples={currentKanji.examples}
            />
          ) : (
            "no kanji selected"
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="has-text-centered">
      <h2 className="title has-text-centered">
        <strong>Deck: </strong>
        {deck.title}
      </h2>
      <div style={{ margin: "40px" }}>
        <SpeechBubble size={140} mood="sad" />
      </div>
      <h4 className="is-size-4">
        It seems you have no kanji characters in your deck
      </h4>
    </div>
  );
};

export default DeckDetails;
