import React, { useContext, useState } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import Deck from "./Deck";
import { SpeechBubble } from "react-kawaii";
import { Pagination } from "./Pagination";

const VocabularyList = ({ mood }) => {
  const { decks } = useContext(VocabContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [decksPerPage] = useState(6);
  // get current decks
  const indexOfLastDeck = currentPage * decksPerPage;
  const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
  const currentDecks = decks.slice(indexOfFirstDeck, indexOfLastDeck);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return decks.length ? (
    <div className="has-text-centered" style={{ padding: "40px" }}>
      <h2 className="is-size-4">Saved Vocabulary Decks</h2>
      <p style={{ paddingBottom: "20px" }}>
        Browse through the decks that contain the kanji characters that you've
        saved.
      </p>
      <hr />
      <div className="container">
        <div className="columns is-multiline">
          {currentDecks &&
            currentDecks.map((deck) => {
              return (
                <Deck
                  key={deck.id}
                  deck={deck}
                  totalDecks={decks.length}
                  decksPerPage={decksPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              );
            })}
        </div>
        <Pagination
          decksPerPage={decksPerPage}
          totalDecks={decks.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  ) : (
    <div className="has-text-centered">
      <div style={{ margin: "40px" }}>
        <SpeechBubble size={140} mood={mood} />
      </div>
      <h4 className="is-size-4">It seems you have no vocabulary decks</h4>
      <p className="is-size-4">
        Create one in the form above so that <br /> you can store kanji
        characters in it.
      </p>
    </div>
  );
};

export default VocabularyList;
