import React, { useState, useEffect } from "react";
import Level from "../layout/Level";
import Info from "../layout/Info";
import KawaiiCat from "../KawaiiCat";
import { Colors } from "../../helpers/theme";
import styled from "styled-components";
import { Play, Loader } from "react-feather";

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
    -webkit-box-shadow: -1px -1px 5px -1px rgba(240, 82, 82, 0.86);
    -moz-box-shadow: -1px -1px 5px -1px rgba(240, 82, 82, 0.86);
    box-shadow: -1px -1px 5px -1px rgba(240, 82, 82, 0.86);
  }
  .level-icon > *:hover {
    cursor: pointer;
  }
`;

const Examples = ({ examples }) => {
  const [audio, setAudio] = useState(new Audio(null));
  const [isPlaying, setPlaying] = useState(false);

  const handleClick = (audioLink) => {
    setAudio(new Audio(audioLink));
  };

  useEffect(() => {
    audio ? audio.play() && setPlaying(true) : audio.pause();
    audio.addEventListener("ended", () => setPlaying(false));
  }, [audio]);
  return examples ? (
    <StyledExamples style={{ paddingBottom: "60px", paddingTop: "20px" }}>
      {!examples.results
        ? examples.map((example, index) => {
            return (
              <Level key={index}>
                <div className="level-item">
                  <span
                    className="level-icon"
                    onClick={(e) => {
                      handleClick(example.audio.mp3);
                    }}
                  >
                    {example.audio.mp3 === audio.src && isPlaying ? (
                      <Loader />
                    ) : (
                      <Play />
                    )}
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
