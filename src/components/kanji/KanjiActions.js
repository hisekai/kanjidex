import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { ArrowLeft, BookOpen } from "react-feather";
import { Colors } from "../../helpers/theme";
import { VocabContext } from "./../../contexts/VocabContext";
import uuid from "uuid/v4";

const StyledKanjiActions = styled.div`
  background-color: #fff;
  position: absolute;
  top: -50px;
  min-height: 30px;
  max-height: 50px;
  width: 100%;
  max-width: 655px;
  padding: 10px;
  z-index: 999;
  #back {
    position: absolute;
    left: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  form {
    max-width: 80%;
  }
  .vocab-icon {
    margin: 10px;
    svg {
      margin: 5px;
      margin-top: 10px;
      color: ${Colors.green};
    }
  }
  button {
    min-height: 40px;
  }
  button[type="submit"] {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
  }
  .control > div > div {
    min-height: 40px;
    border-radius: 0;
  }
`;

const KanjiActions = ({ handleView, kanji }) => {
  const { decks, dispatch } = useContext(VocabContext);
  const options = decks.map((deck) => {
    return { value: deck.id, label: deck.title };
  });
  const [option, setOption] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeckId = uuid();
    if (option.__isNew__) {
      dispatch({
        type: "ADD_DECK",
        deck: { title: option.label, id: newDeckId },
      });
      dispatch({
        type: "ADD_KANJI",
        deck: { id: newDeckId, kanji },
      });
    } else {
      dispatch({
        type: "ADD_KANJI",
        deck: { id: option.value, kanji },
      });
    }
  };
  const handleInputChange = (inputValue) => {
    if (inputValue) {
      setOption({ label: inputValue, value: null });
    }
  };
  useEffect(() => {}, [decks, kanji]);
  return (
    <StyledKanjiActions className="actions">
      <button
        id="back"
        className="button is-primary is-outlined"
        onClick={(e) => handleView(e)}
      >
        <ArrowLeft />{" "}
      </button>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons" style={{ marginLeft: "40px" }}>
          <div className="control is-expanded" style={{ minWidth: "180px" }}>
            <CreatableSelect
              isClearable
              onChange={(option) => setOption(option)}
              onInputChange={(e) => handleInputChange(e)}
              options={options}
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Save
            </button>
          </div>
          <div className="control">
            <a
              target="_blank"
              className="vocab-icon"
              href="./index.html#/kanjidex/vocabulary"
            >
              <BookOpen />
            </a>
          </div>
        </div>
      </form>
    </StyledKanjiActions>
  );
};

export default KanjiActions;
