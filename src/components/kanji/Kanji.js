import React, { useEffect, useState } from "react";
import Level from "../layout/Level";
import { DMAK } from "./DMAK";
import { ExternalLink } from "react-feather";
import { Colors } from "../../helpers/theme";
const Kanji = ({ kanji }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setVisible(!visible);
  };
  useEffect(() => {}, [kanji]);
  return (
    <div className="Kanji">
      <DMAK kanji={kanji.query} />
      <h2 className="title is-4" style={{ textAlign: "center" }}>
        {kanji.meaning}
      </h2>
      <Level>
        <div className="level-left">
          <div className="level-item">
            <p>
              <strong>Strokes: </strong>
              {kanji.strokeCount}
            </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <p>
              <strong>
                <abbr title="Japanese-Language Proficiency Test">JLPT</abbr> :{" "}
              </strong>{" "}
              {kanji.jlptLevel}
            </p>
          </div>
        </div>
      </Level>
      <Level>
        <div className="level-item">
          <p>
            <strong>Onyomi:</strong>
            {kanji.onyomi
              .map(on => JSON.stringify(on))
              .join(", ")
              .replace(/"/g, "")}{" "}
          </p>
        </div>
      </Level>
      <Level>
        <div className="level-item">
          <p>
            <strong>Kunyomi:</strong>
            {kanji.kunyomi
              .map(kun => JSON.stringify(kun))
              .join(", ")
              .replace(/"/g, "")}
          </p>
        </div>
      </Level>
      <Level>
        <div className="level-item">
          <a target="_blank" rel="noopener noreferrer" href={kanji.uri}>
            <strong>
              View on Jisho.org <ExternalLink />
            </strong>
          </a>
        </div>
      </Level>

      <div className="more-details">
        <p className="has-text-centered" style={{ margin: "10px 0" }}>
          <a
            className="is-link"
            href="/"
            style={{ color: Colors.main }}
            onClick={handleClick}
          >
            {!visible ? "View more" : "View less"}
          </a>
        </p>
        {visible && (
          <React.Fragment>
            <Level>
              <div className="level-left">
                <div className="level-item">
                  <p>
                    <strong>Taught in: </strong>
                    {kanji.taughtIn}
                  </p>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <p>
                    <strong>
                      <abbr title="Newspaper Frequency Rank">NFR</abbr> :{" "}
                    </strong>{" "}
                    {kanji.newspaperFrequencyRank}
                  </p>
                </div>
              </div>
            </Level>
            <Level>
              <div className="level-item">
                <p>
                  <strong>Parts: </strong> {kanji.parts.join(", ")}
                </p>
              </div>
            </Level>
            <Level>
              <div className="level-item">
                <img src={kanji.strokeOrderDiagramUri} alt={kanji.meaning} />
              </div>
            </Level>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Kanji;
