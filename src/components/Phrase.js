import React, { useState } from "react";
import styled from "styled-components";
import nihongo from "nihongo";
import KanjiDetails from "./kanji/KanjiDetails";
import { getKanji } from "../helpers/getKanji";
import { Colors } from "./../helpers/theme";
import { ArrowLeft } from "react-feather";

const StyledPhrase = styled.div`
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

const Phrase = ({ phrase }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [kanji, setKanji] = useState();
  const handleView = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = async e => {
    e.preventDefault();
    const selectedKanji = e.target.innerHTML;
    const data = await getKanji(selectedKanji);
    setKanji(data);
    handleView();
  };
  return (
    <React.Fragment>
      <StyledPhrase
        className="Phrase"
        style={{ display: !isVisible ? "none" : "block" }}
      >
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
                  <span className="tag is-success">common word</span>
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
              <div className="Phrase-kanjis">
                <h4>Kanji in this word:</h4>
                <div className="Phrase-kanjis-link">
                  {nihongo
                    .parseKanji(p.japanese[0].word)
                    .map((kanji, index) => (
                      <a
                        key={index}
                        onClick={handleClick}
                        href="/"
                        className="is-link"
                        lang="ja"
                      >
                        {kanji}
                      </a>
                    ))}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </StyledPhrase>

      <div style={{ display: isVisible ? "none" : "block" }}>
        <button className="button is-fullwidth" onClick={handleView}>
          <ArrowLeft /> Go back to results
        </button>
        <KanjiDetails kanji={kanji} />
      </div>
    </React.Fragment>
  );
};

export default Phrase;
