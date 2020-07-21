import React, { useEffect } from "react";
import Level from "../layout/Level";
import { DMAK } from "./DMAK";
import { ExternalLink } from "react-feather";
import styled from "styled-components";

const StyledTitle = styled.div`
  @media (min-width: 400px) {
    .title.is-5 {
      margin: 30px;
    }
  }
`;
const Kanji = ({ kanji }) => {
  useEffect(() => {}, [kanji]);
  return (
    <div className="Kanji" style={{ paddingBottom: "20px" }}>
      <DMAK kanji={kanji.query} jishoUri={kanji.strokeOrderSvgUri} />
      <StyledTitle>
        <h2 className="title is-5" style={{ textAlign: "center" }}>
          {kanji.meaning ? kanji.meaning : "not found"}
        </h2>
      </StyledTitle>
      <Level>
        <div className="level-left">
          <div className="level-item">
            <p>
              <strong>Strokes: </strong>
              {kanji.strokeCount ? kanji.strokeCount : "not found"}
            </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <p>
              <strong>
                <abbr title="Japanese-Language Proficiency Test">JLPT</abbr> :{" "}
              </strong>{" "}
              {kanji.jlptLevel ? kanji.jlptLevel : "not found"}
            </p>
          </div>
        </div>
      </Level>
      <Level>
        <div className="level-item">
          <p>
            <strong>Onyomi:</strong>
            {kanji.onyomi.length > 0
              ? kanji.onyomi
                  .map((on) => JSON.stringify(on))
                  .join(", ")
                  .replace(/"/g, "")
              : "Not found"}
          </p>
        </div>
      </Level>
      <Level>
        <div className="level-item">
          <p>
            <strong>Kunyomi:</strong>
            {kanji.kunyomi.length > 0
              ? kanji.kunyomi
                  .map((kun) => JSON.stringify(kun))
                  .join(", ")
                  .replace(/"/g, "")
              : "Not found"}
          </p>
        </div>
      </Level>
      {kanji.uri && (
        <Level>
          <div className="level-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={kanji.uri}
              className="has-text-primary"
            >
              <strong>
                View on Jisho.org <ExternalLink />
              </strong>
            </a>
          </div>
        </Level>
      )}
    </div>
  );
};

export default Kanji;
