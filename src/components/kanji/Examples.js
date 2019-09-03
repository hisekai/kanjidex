import React from "react";
import Level from "../layout/Level";
import Info from "../layout/Info";
import KawaiiCat from "../KawaiiCat";
import { Colors } from "../../helpers/theme";
import styled from "styled-components";
import { Play } from "react-feather";
import feather from "feather-icons";

const StyledExamples = styled.div`
  .level {
    padding: 0 10px;
  }

  .level-icon {
    background-color: ${Colors.main};
    border-radius: 50% !important;
    padding: 10px;
    -webkit-box-shadow: -1px -1px 6px 0px rgba(240, 82, 82, 0.86);
    -moz-box-shadow: -1px -1px 6px 0px rgba(240, 82, 82, 0.86);
    box-shadow: -1px -1px 6px 0px rgba(240, 82, 82, 0.86);
    transition: all 0.3s ease-in;
    svg {
      color: ${Colors.dimWhite};
    }
  }
  .level-icon:hover {
    cursor: pointer;
    -webkit-box-shadow: -1px -1px 5px -1px rgba(240, 82, 82, 0.86);
    -moz-box-shadow: -1px -1px 5px -1px rgba(240, 82, 82, 0.86);
    box-shadow: -1px -1px 5px -1px rgba(240, 82, 82, 0.86);
  }
`;

const Examples = ({ examples }) => {
  const handleClick = e => {
    let audioFile = e.target.parentElement.parentElement.parentElement.querySelector(
      "audio"
    );
    let audioIcon = e.target.parentElement.parentElement.parentElement.querySelector(
      ".level-icon"
    );
    //TODO: don't change the DOM directly, find a better way
    audioIcon.innerHTML = `${feather.icons.loader.toSvg()}`;
    audioFile.play();
    audioFile.addEventListener("ended", () => {
      audioIcon.innerHTML = `${feather.icons.play.toSvg()}`;
    });
  };
  return examples ? (
    <StyledExamples>
      {!examples.results
        ? examples.map((example, index) => {
            return (
              <Level key={index}>
                <div className="level-item">
                  <span className="level-icon" onClick={handleClick}>
                    <Play />
                  </span>
                  <audio>
                    <source src={example.audio.mp3} type="audio/mpeg" />
                  </audio>
                  {example.japanese}
                  <br /> {example.meaning.english}
                </div>
              </Level>
            );
          })
        : examples.results.map((example, index) => {
            return (
              <Level key={index}>
                <div className="level-item">
                  {example.kanji} <br />
                  {example.english}
                </div>
              </Level>
            );
          })}
    </StyledExamples>
  ) : (
    <StyledExamples>
      <div className="has-text-centered">
        <KawaiiCat mood="sad" />
        <Info>
          <p>Sorry, no examples found for this kanji!</p>
        </Info>
      </div>
    </StyledExamples>
  );
};

export default Examples;
