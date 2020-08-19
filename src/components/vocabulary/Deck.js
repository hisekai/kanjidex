import React, { useState, useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import { Edit3, Eye, Trash2, Save, Download } from "react-feather";
import styled from "styled-components";
import { getCVS } from "../../helpers/cvs";

const StyledDeck = styled.div`
  .card-header {
    min-height: 64px;
  }
  button.is-text,
  a.is-text {
    text-decoration: none;
  }
  footer svg {
    margin-left: 8px;
  }
  #editVocabForm {
    .control {
      min-width: 106%;
    }
  }
  .control {
    margin-top: 12px;
    margin-left: 10px;
  }
`;

const Deck = ({
  deck,
  totalDecks,
  decksPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(VocabContext);
  const deckUrl = `index.html#/kanjidex/vocabulary/${deck.id}`;
  const handleClick = () => {
    setIsEditable(!isEditable);
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE_DECK", id: deck.id });
    // after deleting the last deck on the page
    // get the previous page
    if (totalDecks % decksPerPage === 1) {
      setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(!isEditable);
    if (title.length > 1) {
      dispatch({
        type: "UPDATE_DECK",
        deck: {
          id: deck.id,
          title,
        },
      });
    }
  };
  const handleDownload = () => {
    getCVS(deck.title, deck.kanjis, deck.phrases);
  };

  return (
    <div className="column is-4">
      <StyledDeck className="Deck card">
        <header className="card-header">
          {isEditable ? (
            // form for editing
            <form id="editVocabForm" onSubmit={handleSubmit}>
              <div className="field has-addons">
                <div className="control is-fullwidth">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder={deck.title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="control" style={{ marginLeft: "0" }}>
                  <button className="button is-primary" type="submit">
                    <span className="icon">
                      <Save />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            // display the title
            <React.Fragment>
              <p className="card-header-title">{deck.title}</p>
              <div className="card-header-icon" aria-label="more options">
                <button className="button is-primary" onClick={handleClick}>
                  <span className="icon">
                    <Edit3 />
                  </span>
                </button>
              </div>
            </React.Fragment>
          )}
        </header>
        <div className="card-content">
          <div className="content">
            <p className="has-text-centered">
              You have <strong>{deck.kanjis ? deck.kanjis.length : "0"}</strong>{" "}
              <span class="tag is-primary is-light">
                {deck.kanjis.length > 1 ? "kanjis" : "kanji"}
              </span>{" "}
              and <strong>{deck.phrases ? deck.phrases.length : "0"}</strong>{" "}
              <span class="tag is-primary is-light">
                {deck.phrases.length > 1 ? "words" : "word"}
              </span>
              saved.
            </p>
            <button class="button is-primary" onClick={() => handleDownload()}>
              <span class="icon">
                <Download />
              </span>
              <span>Export to Anki</span>
            </button>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <a href={deckUrl} className="button is-text has-text-info">
              View <Eye />
            </a>
          </div>
          <div className="card-footer-item">
            <button
              className="button is-text has-text-danger"
              onClick={handleDelete}
            >
              Delete <Trash2 />
            </button>
          </div>
        </footer>
      </StyledDeck>
    </div>
  );
};

export default Deck;
