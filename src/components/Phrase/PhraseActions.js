import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { VocabContext } from "../../contexts/VocabContext";
import uuid from "uuid/v4";

const StyledPhraseActions = styled.div`
  background-color: #fff;
  min-height: 30px;
  max-height: 50px;
  width: 100%;
  padding: 10px;
  margin-left: -10px;
  z-index: 999;
  opacity: 50%;
  &:hover {
    opacity: 100%;
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

const PhraseActions = ({ phrase }) => {
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
        type: "ADD_PHRASE",
        deck: { id: newDeckId, phrase },
      });
    } else {
      dispatch({
        type: "ADD_PHRASE",
        deck: { id: option.value, phrase },
      });
    }
  };
  const handleInputChange = (inputValue) => {
    if (inputValue) {
      setOption({ label: inputValue, value: null });
    }
  };
  useEffect(() => {}, [decks, phrase]);
  return (
    <StyledPhraseActions className="actions">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
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
        </div>
      </form>
    </StyledPhraseActions>
  );
};

export default PhraseActions;
