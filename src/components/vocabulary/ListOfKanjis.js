import React, { useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import { Eye, Trash2 } from "react-feather";

const ListOfKanjis = ({
  deckId,
  kanjis,
  value,
  setCurrentKanji,
  handleRemoveKanji,
}) => {
  const { dispatch } = useContext(VocabContext);
  const list =
    kanjis &&
    kanjis
      .filter((k) => value === "" || k.kanji.meaning.includes(value))
      .map((kanji) => {
        return (
          <div
            className="panel-block"
            style={{ justifyContent: "space-between" }}
          >
            <p style={{ textAlign: "left" }}>
              <span className="panel-icon" style={{ marginTop: "5px" }}>
                {kanji.kanji.query}
              </span>
              <span className="panel-meaning" style={{ marginLeft: "10px" }}>
                {kanji.kanji.meaning}
              </span>
            </p>
            <div className="field has-addons">
              <p className="control">
                <button
                  className="button is-info is-outlined"
                  onClick={() => setCurrentKanji(kanji)}
                >
                  <span className="icon is-small">
                    <Eye />
                  </span>
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-danger is-outlined"
                  onClick={() => handleRemoveKanji(kanji)}
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
  return kanjis.length === 0 ? (
    <div className="has-text-centered" style={{ padding: "10px" }}>
      no kanji characters found
    </div>
  ) : (
    <>
      <div className="list">{list} </div>
      <div className="panel-block">
        <button
          className="button is-danger is-outlined is-fullwidth"
          onClick={() =>
            dispatch({
              type: "REMOVE_ALL_KANJI",
              deck: { id: deckId },
            })
          }
        >
          Remove All Kanji
        </button>
      </div>
    </>
  );
};

export default ListOfKanjis;
