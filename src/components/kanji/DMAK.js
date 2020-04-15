import React, { useState } from "react";
import Dmak from "../../helpers/dmak";
import styled from "styled-components";
import { Play, SkipBack, SkipForward, RotateCcw, Pause } from "react-feather";
import { Colors } from "../../helpers/theme";

const StyledDMAK = styled.div`
  min-height: 180px;
  #draw-kanji {
    overflow: hidden;
    width: 130px;
    height: 130px;
    margin: auto;
    margin-bottom: 20px;
  }
  > #draw-kanji > svg {
    display: block;
    margin: 20px auto 10px;
  }

  > .field {
    justify-content: center;
    margin-bottom: 10px;
  }

  > .field.has-addons {
    justify-content: center;
  }

  > .has-addons .button {
    border-radius: 50%;
  }

  a {
    display: block;
    margin: auto;
    max-width: 100px;
  }
  button:hover span {
    color: ${Colors.dimWhite};
    transition: all 0.1s ease-in-out;
  }
`;

export const DMAK = (props) => {
  const [kanji, setKanji] = useState("");
  // default uri using tagaini.net
  //const tagainiUri = "http://kanjivg.tagaini.net/kanjivg/kanji/";
  // jisho uri that links to the svg uri
  const uri =
    props.jishoUri.substring(0, props.jishoUri.lastIndexOf("/")) + "/";
  if (props.kanji && props.kanji !== kanji) {
    setKanji(props.kanji);
  }
  if (kanji) {
    let dmak = new Dmak(kanji, {
      element: "draw-kanji",
      uri,
    });

    function handleBack() {
      dmak.eraseLastStrokes(1);
    }
    function handleNext() {
      dmak.renderNextStrokes(1);
    }
    function handlePlay() {
      dmak.render();
    }
    function handlePause() {
      dmak.pause();
    }
    function handleReset() {
      dmak.erase();
    }
    return (
      <StyledDMAK>
        <div id="draw-kanji">{/* */}</div>
        <div className="field has-addons">
          <p className="control ">
            <button
              className="button is-medium is-primary is-outlined"
              onClick={handleBack}
            >
              <span className="icon">
                <SkipBack />
              </span>
            </button>
          </p>
          <p className="control">
            <button
              className="button is-medium is-primary is-outlined"
              onClick={handlePause}
            >
              <span className="icon">
                <Pause />
              </span>
            </button>
          </p>
          <p className="control">
            <button
              className="button is-medium is-primary is-outlined"
              onClick={handlePlay}
            >
              <span className="icon">
                <Play />
              </span>
            </button>
          </p>
          <p className="control">
            <button
              className="button is-medium is-primary is-outlined"
              onClick={handleNext}
            >
              <span className="icon">
                <SkipForward />
              </span>
            </button>
          </p>
          <p className="control">
            <button
              className="button is-medium is-primary is-outlined"
              onClick={handleReset}
            >
              <span className="icon">
                <RotateCcw />
              </span>
            </button>
          </p>
        </div>
      </StyledDMAK>
    );
  } else {
    return <div>loading</div>;
  }
};
