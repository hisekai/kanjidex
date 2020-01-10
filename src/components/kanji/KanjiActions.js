import React from "react";
import styled from "styled-components";
import { ArrowLeft, BookOpen } from "react-feather";
import { Colors } from "../../helpers/theme";

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
  form {
    max-width: 80%;
  }
  .vocab-icon {
    margin: 10px;
    svg {
      margin: 5px;
      color: ${Colors.green};
    }
  }
`;

const KanjiActions = ({ handleView }) => {
  return (
    <StyledKanjiActions className="actions">
      <form>
        <div className="field has-addons">
          <div className="control">
            <button
              className="button is-primary is-outlined"
              onClick={e => handleView(e)}
            >
              <ArrowLeft />{" "}
            </button>
          </div>
          <div className="control is-expanded" style={{ minWidth: "180px" }}>
            <input
              type="text"
              className="input is-primary"
              name="city"
              list="decks"
            />
            <datalist id="decks">
              <option value="Travel" />
              <option value="Food" />
              <option value="Animals" />
            </datalist>
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
