import React, { useState, useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import { Edit3, Eye, Trash2, Save } from "react-feather";
import styled from "styled-components";

const StyledDeck = styled.div`
  button.is-text,
  a.is-text {
    text-decoration: none;
  }
  footer svg {
    margin-left: 8px;
  }
`;

const Deck = ({ deck }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(VocabContext);
  const deckUrl = `index.html#/kanjidex/vocabulary/${deck.id}`;
  const handleClick = () => {
    setIsEditable(!isEditable);
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE_DECK", id: deck.id });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsEditable(!isEditable);
    dispatch({
      type: "UPDATE_DECK",
      deck: {
        id: deck.id,
        title
      }
    });
  };
  return (
    <div className="column is-4">
      <StyledDeck className="Deck card">
        <header className="card-header">
          {isEditable ? (
            <form onSubmit={handleSubmit}>
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder={deck.title}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
                <div className="control">
                  <button className="button is-primary" type="submit">
                    <span className="icon">
                      <Save />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
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
            <p className="has-text-left">
              Currently you have{" "}
              <strong>{deck.kanjis ? deck.kanjis.length : "0"}</strong> kanji
              characters saved.
            </p>
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
