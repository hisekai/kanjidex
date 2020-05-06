/*global chrome*/
import React, { useContext, useState, useEffect } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import Deck from "./Deck";
import { SpeechBubble } from "react-kawaii";
import { Pagination } from "./Pagination";
import uuid from "uuid/v4";
import { getKanji } from "../../helpers/getKanji";

const VocabularyList = ({ mood }) => {
  const { decks, dispatch } = useContext(VocabContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [decksPerPage] = useState(6);
  // get current decks
  const indexOfLastDeck = currentPage * decksPerPage;
  const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
  const currentDecks = decks.slice(indexOfFirstDeck, indexOfLastDeck);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    // check if there's any previous saved data from Kanjidex v.2
    chrome.storage.local.get("savedKanjis", function (result) {
      const savedKanjis = result.savedKanjis;
      if (savedKanjis && savedKanjis.length > 0) {
        const deckId = uuid();
        dispatch({
          type: "ADD_DECK",
          deck: {
            title: "Kanjidex",
            id: deckId,
          },
        });

        // get each Kanjidex details and store them to the newly created deck
        savedKanjis.forEach(async (kanji, index) => {
          const data = await getKanji(kanji);
          dispatch({
            type: "ADD_KANJI",
            deck: { id: deckId, kanji: data },
          });
          // force update
          if (index === savedKanjis.length - 1) {
            window.location.reload();
          }
        });
      }
      // remove the old storage
      chrome.storage.local.remove(["savedKanjis"]);
    });
  }, [dispatch]);
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
