import React, { useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import { Eye, Trash2 } from "react-feather";

const ListOfPhrases = ({
  deckId,
  phrases,
  value,
  setCurrentPhrase,
  handleRemovePhrase,
}) => {
  const { dispatch } = useContext(VocabContext);
  const list =
    phrases &&
    phrases
      .filter(
        (p) =>
          value === "" ||
          p.senses[0].english_definitions
            .map((def) => def)
            .join(", ")
            .includes(value)
      )
      .map((phrase) => {
        const def = phrase.senses[0].english_definitions
          .map((def) => def)
          .join(", ");
        return (
          <div
            className="panel-block"
            style={{ justifyContent: "space-between" }}
          >
            <p style={{ textAlign: "left" }}>
              <strong>
                {phrase.japanese[0].word && phrase.japanese[0].word}
              </strong>{" "}
              <span style={{ marginLeft: "10px" }}>{def}</span>
            </p>
            <div className="field has-addons">
              <p className="control">
                <button
                  className="button is-info is-outlined"
                  onClick={() => setCurrentPhrase(phrase)}
                >
                  <span className="icon is-small">
                    <Eye />
                  </span>
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-danger is-outlined"
                  onClick={() => handleRemovePhrase(phrase)}
                >
                  <span className="icon is-small">
                    <Trash2 />
                  </span>
                </button>
              </p>
            </div>
          </div>
        );
      });

  return phrases.length === 0 ? (
    <div className="has-text-centered" style={{ padding: "10px" }}>
      no words found
    </div>
  ) : (
    <>
      <div className="list">{list} </div>
      <div className="panel-block">
        <button
          className="button is-danger is-outlined is-fullwidth"
          onClick={() =>
            dispatch({
              type: "REMOVE_ALL_PHRASES",
              deck: { id: deckId },
            })
          }
        >
          Remove All Words
        </button>
      </div>
    </>
  );
};

export default ListOfPhrases;
