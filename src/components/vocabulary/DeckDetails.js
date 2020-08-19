import React, { useContext, useState } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import { SpeechBubble } from "react-kawaii";
import { Search } from "react-feather";
import CurrentKanji from "./CurrentKanji";
import CurrentPhrase from "./CurrentPhrase";
import ListOfKanjis from "./ListOfKanjis";
import ListOfPhrases from "./ListOfPhrases";

const DeckDetails = (props) => {
  const { decks, dispatch } = useContext(VocabContext);
  const deckId = props.match.params.id;
  const deck = decks.filter((deck) => deck.id === deckId)[0];
  const [tab, setTab] = useState("kanji");
  const [currentKanji, setCurrentKanji] = useState();
  const [currentPhrase, setCurrentPhrase] = useState();
  const [value, setValue] = useState("");
  const handleRemoveKanji = (kanji) => {
    dispatch({
      type: "REMOVE_KANJI",
      deck: { id: deckId, kanji: kanji.kanji.query },
    });
    if (kanji.kanji.query === currentKanji.kanji.query) {
      setCurrentKanji();
    }
  };
  const handleRemovePhrase = (phrase) => {
    dispatch({
      type: "REMOVE_PHRASE",
      deck: { id: deckId, phrase: phrase.slug },
    });
    if (phrase.slug === currentPhrase.slug) {
      setCurrentPhrase();
    }
  };
  return !deck || (deck.kanjis.length === 0 && deck.phrases.length === 0) ? (
    <div className="has-text-centered">
      <div style={{ margin: "40px" }}>
        <SpeechBubble size={140} mood="happy" />
      </div>

      <h4 className="is-size-4">
        Your deck is currently empty. <br />
        Start adding either kanji or words to your deck to have them displayed
        here.
      </h4>
    </div>
  ) : (
    <div className="Deck-details container">
      <h2 className="title has-text-centered">
        <strong>Deck: </strong>
        {deck.title}
      </h2>
      <hr />
      <div className="columns">
        <div className="column is-one-quarter">
          <nav className="panel">
            <p className="panel-heading">Currently saved</p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Search"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <span className="icon is-left">
                  <Search />
                </span>
              </p>
            </div>
            <p className="panel-tabs">
              <a
                className={tab === "kanji" && "is-active"}
                onClick={(e) => setTab("kanji")}
              >
                Kanji
              </a>
              <a
                className={tab === "phrase" && "is-active"}
                onClick={() => setTab("phrase")}
              >
                Words
              </a>
            </p>
            {tab === "phrase" ? (
              <ListOfPhrases
                deckId={deckId}
                phrases={deck.phrases}
                value={value}
                setCurrentPhrase={setCurrentPhrase}
                handleRemovePhrase={handleRemovePhrase}
              />
            ) : (
              <ListOfKanjis
                deckId={deckId}
                kanjis={deck.kanjis}
                value={value}
                setCurrentKanji={setCurrentKanji}
                handleRemoveKanji={handleRemoveKanji}
              />
            )}
          </nav>
        </div>
        <div className="column">
          {/* check if there are any current kanji or phrase selected */}
          {(currentKanji && tab === "kanji") ||
          (currentPhrase && tab === "phrase") ? (
            tab === "kanji" && currentKanji ? (
              <CurrentKanji
                kanji={currentKanji.kanji}
                radical={currentKanji.radical}
                radicalAlt={currentKanji.kanji.radical}
                examples={currentKanji.examples}
              />
            ) : (
              tab === "phrase" &&
              currentPhrase && <CurrentPhrase phrase={currentPhrase} />
            )
          ) : (
            <div className="has-text-centered">
              <div style={{ margin: "40px" }}>
                <SpeechBubble size={140} mood="happy" />
              </div>
              {/* check if there's any available data at all */}
              <h4 className="is-size-4">
                {tab === "kanji"
                  ? deck.kanjis.length !== 0
                    ? "Select a kanji to get more details."
                    : "You don't have any kanji characters saved"
                  : deck.phrases.length !== 0
                  ? "Select a word to get more details."
                  : "You don't have any words saved"}
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeckDetails;
