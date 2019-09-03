import React, { useState, useEffect } from "react";
import Kanji from "./Kanji";
import Radical from "./Radical";
import Examples from "./Examples";
import Info from "../layout/Info";
import KawaiiCat from "../KawaiiCat";
import styled from "styled-components";

const StyledKanjiDetails = styled.div`
  .tabs {
    flex-direction: column;
  }
  .tabs-content {
    height: 580px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      height: 15px;
      width: 15px;
      background: #f2f2f2;
    }

    ::-webkit-scrollbar-corner {
      background: #f2f2f2;
    }
    ::-webkit-scrollbar-thumb {
      background: #eb5757;
      border-radius: 5px;
      -webkit-border-radius: 5px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
    }
  }
  .tabs-content-inner {
    animation: fadeEffect 1s;
  }
  .tabs ul {
    border-bottom: none;
    margin-top: 20px;
  }

  @keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const KanjiDetails = ({ kanji }) => {
  const [tab, setTab] = useState("kanji");
  const handleClick = (e, link) => {
    document.querySelector(".tabs-content-inner").style.display = "none";
    e.preventDefault();
    setTab(link);
    setTimeout(() => {
      document.querySelector(".tabs-content-inner").style.display = "block";
    }, 100);
  };
  useEffect(() => {}, [kanji]);
  return kanji ? (
    <StyledKanjiDetails className="Kanji-details">
      <div className="tabs-content">
        <div className="tabs-content-inner">
          {tab === "kanji" ? (
            <Kanji kanji={kanji.kanji} />
          ) : tab === "radical" ? (
            // radicalAlt is additional info for the radical from jisho.org
            <Radical radical={kanji.radical} radicalAlt={kanji.kanji.radical} />
          ) : (
            <Examples examples={kanji.examples} />
          )}
        </div>
      </div>
      <div className="tabs is-centered">
        <ul>
          <li
            className={tab === "kanji" ? "is-active" : ""}
            onClick={e => handleClick(e, "kanji")}
          >
            <a href="/">Kanji</a>
          </li>
          <li
            className={tab === "radical" ? "is-active" : ""}
            onClick={e => handleClick(e, "radical")}
          >
            <a href="/">Radical</a>
          </li>
          <li
            className={tab === "examples" ? "is-active" : ""}
            onClick={e => handleClick(e, "examples")}
          >
            <a href="/">Examples</a>
          </li>
        </ul>
      </div>
    </StyledKanjiDetails>
  ) : (
    <StyledKanjiDetails>
      <div className="has-text-centered">
        <KawaiiCat mood="sad" />
        <Info>
          <p>Sorry, it seems we couldn't find anything about this kanji!</p>
        </Info>
      </div>
    </StyledKanjiDetails>
  );
};

export default KanjiDetails;
