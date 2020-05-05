import React, { useState } from "react";
import styled from "styled-components";
import nihongo from "nihongo";
import KanjiDetails from "./kanji/KanjiDetails";
import KanjiActions from "./kanji/KanjiActions";
import PhraseActions from "./Phrase/PhraseActions";
import { getKanji } from "../helpers/getKanji";
import { Colors } from "./../helpers/theme";

const StyledPhrase = styled.div`
  padding: 0 10px;
  .Phrase-single .Phrase-slug {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    font-size: 30px;
  }

  .Phrase-senses {
    counter-reset: item;
  }

  .Phrase-sense {
    position: relative;
  }

  .Phrase-sense p::before {
    position: absolute;
    display: inline-block;
    content: counter(item);
    counter-increment: item;
    width: 1em;
    left: -15px;
    color: ${Colors.lightGrey};
  }

  .Phrase-sense h5 {
    margin-top: 15px;
    color: ${Colors.lightGrey};
  }

  .Phrase-kanjis h4 {
    margin-top: 15px;
    margin-right: 10px;
    font-weight: bold;
    display: inline-block;
  }

  .Phrase-kanjis-link {
    display: inline-block;
    font-size: 20px;
    a {
      margin-right: 5px;
    }
  }
`;

const Phrase = ({ phrase, setPhrase, setMood }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [kanji, setKanji] = useState();
  const handleView = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const selectedKanji = e.target.innerHTML;
    const data = await getKanji(selectedKanji);
    setKanji(data);
    handleView(e);
  };
  const handleClear = (e) => {
    e.preventDefault();
    setPhrase([]);
    setMood("happy");
  };
  return (
    <React.Fragment>
      <StyledPhrase
        className="Phrase"
        style={{ display: !isVisible ? "none" : "block" }}
      >
        <button
          className="button is-fullwidth is-danger"
          style={{ marginBottom: "8px" }}
          onClick={(e) => handleClear(e)}
        >
          Clear All
        </button>
        {phrase.map((p, index) => {
          return (
            <div key={index} className="Phrase-single">
              <div className="Phrase-slug">
                <span lang="ja">
                  <ruby>
                    {p.japanese[0].word} <rt>{p.japanese[0].reading}</rt>
                  </ruby>
                </span>{" "}
                {p.is_common && (
                  <span
                    className="tag is-success"
                    style={{ marginBottom: "8px" }}
                  >
                    common word
                  </span>
                )}
                {p.jlpt && p.jlpt.length !== 0 && (
                  <span className="tag is-info">
                    {p.jlpt.map((j) => j.split("-").join(" ")).join(", ")}
                  </span>
                )}
              </div>
              <div className="Phrase-senses">
                {p.senses.map((sense, index) => {
                  return (
                    <div key={index} className="Phrase-sense">
                      {sense.parts_of_speech && (
                        <h5 className="is-dark">{sense.parts_of_speech}</h5>
                      )}
                      <p> {sense.english_definitions.join(", ")}</p>
                    </div>
                  );
                })}
              </div>
              {p.japanese[0].word && (
                <div className="Phrase-kanjis">
                  <h4>Kanji in this word:</h4>
                  <div className="Phrase-kanjis-link">
                    {p.japanese[0].word &&
                      nihongo
                        .parseKanji(p.japanese[0].word)
                        .map((kanji, index) => (
                          <a
                            key={index}
                            onClick={(e) => handleClick(e)}
                            href="/"
                            className="is-link"
                            lang="ja"
                          >
                            {kanji}
                          </a>
                        ))}
                  </div>
                </div>
              )}

              <PhraseActions phrase={phrase[index]} />
              <hr />
            </div>
          );
        })}
      </StyledPhrase>

      <div
        style={{ display: isVisible ? "none" : "block", position: "relative" }}
      >
        <KanjiActions handleView={handleView} />
        <KanjiDetails kanji={kanji} />
      </div>
    </React.Fragment>
  );
};

export default Phrase;
