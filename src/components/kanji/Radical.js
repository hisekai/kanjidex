import React, { useState } from "react";
import Level from "../layout/Level";
import Info from "../layout/Info";
import KawaiiCat from "../KawaiiCat";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Colors } from "../../helpers/theme";
import styled from "styled-components";

const StyledRadical = styled.div`
  .Radical-slider {
    min-height: 190px;
    img {
      height: 109px;
      width: 109px;
      display: block;
      margin: 20px auto 15px auto;
    }
    .field.has-addons {
      justify-content: center;
    }
    .icon:hover {
      color: ${Colors.dimWhite};
    }
  }
  .level img {
    vertical-align: initial;
  }
  .level:last-child {
    margin-top: -1.5rem;
  }
  .title.is-5 {
    margin-top: -5px;
    margin-bottom: 0px;
  }
  button {
    border-radius: 50%;
  }
  .radicalAlt-symbol {
    display: block;
    text-align: center;
    font-size: 60px;
    margin: 30px auto 20px auto;
  }
  @media (min-width: 400px) {
    .title.is-5 {
      margin-bottom: 20px;
    }
    .level:last-child {
      margin-top: 0;
    }
  }
`;

const Radical = ({ radical, radicalAlt }) => {
  const radicalAnimationNum =
    radical != null || radical != undefined
      ? radical.animation.length - 1
      : null;
  const [count, setCount] = useState(radicalAnimationNum);
  const handleClick = (operation) => {
    if (count === radical.animation.length - 1 && operation + 1) {
      setCount(0);
    } else if (count === 0 && operation === -1) {
      setCount(radical.animation.length - 1);
    } else {
      setCount(count + operation);
    }
  };
  return radical || radicalAlt ? (
    radical != null || radical != undefined ? (
      <StyledRadical className="Radical">
        <div className="Radical-slider">
          {radical.animation ? (
            <img src={radical.animation[count]} alt="" />
          ) : (
            radicalAlt.symbol
          )}
          {radical.animation && (
            <div className="field has-addons">
              <p className="control ">
                <button
                  className="button is-medium is-primary is-outlined"
                  onClick={() => handleClick(-1)}
                >
                  <span className="icon">
                    <ArrowLeft />
                  </span>
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-medium is-primary is-outlined"
                  onClick={() => handleClick(+1)}
                >
                  <span className="icon">
                    <ArrowRight />
                  </span>
                </button>
              </p>
            </div>
          )}
        </div>
        <h2 className="title is-5" style={{ textAlign: "center" }}>
          {radical.meaning.english}
        </h2>
        {radicalAlt && (
          <Level>
            <div className="level-left">
              <div className="level-item">
                <p>
                  <strong>Forms: </strong>
                  {radicalAlt && radicalAlt.forms
                    ? radicalAlt.forms.map((form) => form).join(", ")
                    : "Not found"}
                </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <p>
                  <strong>Symbol: </strong>{" "}
                  {radicalAlt && radicalAlt.symbol
                    ? radicalAlt.symbol
                    : "Not found"}
                </p>
              </div>
            </div>
          </Level>
        )}
        <Level>
          <div className="level-item">
            <p>
              <strong>Hiragana: </strong> {radical.name.hiragana}
            </p>
          </div>
        </Level>
        <Level>
          <div className="level-item">
            <p>
              <strong>Romaji: </strong>
              {radical.name.romaji}
            </p>
          </div>
        </Level>
        <Level>
          <div className="level-left">
            <div className="level-item">
              <p>
                <strong>Strokes: </strong>
                {radical.strokes}
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <p>
                <strong>Position: </strong>{" "}
                {radical.position.icon ? (
                  <img
                    src={radical.position.icon}
                    alt={radical.meaning.english}
                  />
                ) : (
                  "Not found"
                )}
              </p>
            </div>
          </div>
        </Level>
      </StyledRadical>
    ) : (
      <StyledRadical>
        {console.log(radicalAlt)}
        <div className="Radical-slider">
          <div className="radicalAlt-symbol">{radicalAlt.symbol}</div>
          <h2 className="title is-5" style={{ textAlign: "center" }}>
            {radicalAlt.meaning}
          </h2>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h4 className="title is-4">Sorry!</h4>
            <p class="subtitle is-6">
              No other information about <br /> this radical was found.
            </p>
          </div>
        </div>
      </StyledRadical>
    )
  ) : (
    <StyledRadical>
      <div className="has-text-centered">
        <KawaiiCat mood="sad" />
        <Info>
          <p>Sorry, no radical found for this kanji!</p>
        </Info>
      </div>
    </StyledRadical>
  );
};

export default Radical;
