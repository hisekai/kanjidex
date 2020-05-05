import React from "react";
import styled from "styled-components";
import { Colors } from "../../helpers/theme";

const StyledCurrentPhrase = styled.div`
  .Phrase-slug {
    ruby {
      font-size: 1.6em;
    }
    rt {
      font-size: 0.6em;
    }
    .tag {
      margin-bottom: 8px;
    }
  }
  .Phrase-senses {
    counter-reset: item;
    font-size: 1.2em;
  }
  .Phrase-sense {
    position: relative;
    .see-also {
      font-size: 0.8em;
      margin-left: 5px;
    }
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

  .Phrase-other-forms {
    margin-top: 5px;
  }
`;

const CurrentPhrase = ({ phrase }) => {
  return (
    <StyledCurrentPhrase>
      <div className="columns is-multiline">
        <div className="column is-one-fifth">
          <div className="Phrase-slug" style={{ textAlign: "right" }}>
            <span lang="ja">
              <ruby>
                {phrase.japanese[0].word} <rt>{phrase.japanese[0].reading}</rt>
              </ruby>
            </span>{" "}
            <br />
            {phrase.is_common && (
              <span className="tag is-success">common word</span>
            )}{" "}
            <br />
            {phrase.jlpt.length !== 0 && (
              <span className="tag is-info">
                {phrase.jlpt.map((j) => j.split("-").join(" "))}
              </span>
            )}
          </div>
        </div>
        <div className="column">
          <div className="Phrase-senses">
            {phrase.senses.map((sense, index) => {
              return (
                <div key={index} className="Phrase-sense">
                  {sense.parts_of_speech && (
                    <h5 className="is-dark">{sense.parts_of_speech}</h5>
                  )}
                  <p>
                    {" "}
                    {sense.english_definitions.join(", ")}{" "}
                    <span className="see-also">
                      {sense.see_also.length > 0 && (
                        <span className="has-text-grey">
                          See also:{" "}
                          <span className="has-text-grey-dark">
                            {sense.see_also}
                          </span>
                        </span>
                      )}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <hr />
          {phrase.japanese.length > 1 && (
            <div className="Phrase-other-forms">
              <h5 className="is-dark has-text-grey">Other Forms:</h5>
              {phrase.japanese.map((j, i) => {
                if (i !== 0) {
                  return (
                    <div key={i}>
                      {j.word} 【{j.reading}】
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </StyledCurrentPhrase>
  );
};

export default CurrentPhrase;
