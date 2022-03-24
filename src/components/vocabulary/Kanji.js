import React, { useState } from "react";
import { DMAK } from "../kanji/DMAK";
import Level from "../layout/Level";
import styled from "styled-components";

const StyledKanji = styled.div`
  strong {
    margin-right: 4px;
  }
  img {
    height: auto;
    width: 100%;
  }
  .stroke-order:hover {
    cursor: pointer;
  }
`;

const Kanji = ({ kanji }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StyledKanji>
      <div className="column">
        <DMAK kanji={kanji.query} jishoUri={kanji.strokeOrderSvgUri} />
        <h2 className="title is-5" style={{ textAlign: "center" }}>
          {kanji.meaning ? kanji.meaning : "not found"}
        </h2>
        <Level>
          <div className="level-left">
            <div className="level-item has-text-left">
              <strong>Strokes: </strong>
              {kanji.strokeCount ? kanji.strokeCount : "not found"}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-left">
              <strong>
                <abbr title="Japanese-Language Proficiency Test">JLPT</abbr> :{" "}
              </strong>{" "}
              {kanji.jlptLevel ? kanji.jlptLevel : "not found"}
            </div>
          </div>
        </Level>
        <Level>
          <div className="level-left">
            <div className="level-item has-text-left">
              <strong>Taught In:</strong>{" "}
              {kanji.taughtIn ? kanji.taughtIn : "not found"}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-left">
              <strong>
                {" "}
                <abbr title="Newspaper Frequency Rank">NFR</abbr>:
              </strong>
              {kanji.newspaperFrequencyRank
                ? kanji.newspaperFrequencyRank
                : "not found"}
            </div>
          </div>
        </Level>
        <Level>
          <div className="level-item">
            <p>
              <strong>Onyomi:</strong>
              {kanji.onyomi
                ? kanji.onyomi
                    .map((on) => JSON.stringify(on))
                    .join(", ")
                    .replace(/"/g, "")
                : "not found"}
            </p>
          </div>
        </Level>
        <Level>
          <div className="level-item">
            <p>
              <strong>Kunyomi:</strong>
              {kanji.kunyomi
                ? kanji.kunyomi
                    .map((kun) => JSON.stringify(kun))
                    .join(", ")
                    .replace(/"/g, "")
                : "not found"}
            </p>
          </div>
        </Level>
        <div className="level">
          <div
            className="level-item has-text-left"
            style={{ maxWidth: "100%" }}
          >
            <figure
              className="image is-fullwidth"
              onClick={() => setIsVisible(true)}
            >
              {kanji.strokeOrderDiagramUri && (
                <img
                  className="stroke-order"
                  src={kanji.strokeOrderDiagramUri.replace(
                    /^https:\/\//i,
                    "http://"
                  )}
                  alt={kanji.meaning}
                />
              )}
            </figure>
            <div className={isVisible ? "modal is-active" : "modal"}>
              <div className="modal-background"></div>
              <div className="modal-content">
                <p className="image is-fullwidth">
                  <img
                    src={kanji.strokeOrderDiagramUri.replace(
                      /^https:\/\//i,
                      "http://"
                    )}
                    alt={kanji.meaning}
                    onClick={() => setIsVisible(false)}
                  />
                </p>
              </div>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => setIsVisible(false)}
              ></button>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="level-item has-text-left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={kanji.uri}
              className="has-text-primary"
            >
              <strong>View on Jisho.org</strong>
            </a>
          </div>
        </div>
      </div>
    </StyledKanji>
  );
};

export default Kanji;
