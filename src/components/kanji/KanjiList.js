import React, { useState } from "react";
import Level from "../layout/Level";
import KanjiDetails from "./KanjiDetails";
import styled from "styled-components";
import { Delete, Eye, ArrowLeft } from "react-feather";

const StyledKanjiList = styled.div`
  position: relative;
  span {
    color: black;
  }
  .icon.has-text-info {
    position: absolute;
    right: 45px;
  }
  .icon.has-text-danger {
    position: absolute;
    right: 15px;
  }
  .icon:hover {
    cursor: pointer;
  }
  .meaning {
    max-width: 70%;
  }
`;

const KanjiList = ({ kanjis, deleteKanji }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedKanji, setSelectedKanji] = useState(null);
  const handleDelete = e => {
    e.preventDefault();
    const kanji = e.target.parentElement.parentElement.parentElement.querySelector(
      ".kanji"
    ).innerHTML;
    deleteKanji(kanji);
  };
  const handleView = e => {
    e.preventDefault();
    setIsVisible(!isVisible);
    const item = e.target.parentElement.parentElement.parentElement.querySelector(
      ".kanji"
    ).innerHTML;
    kanjis.map(kanji => {
      if (kanji.kanji.query === item) {
        setSelectedKanji(kanji);
      }
      return kanji;
    });
  };
  return (
    <React.Fragment>
      <StyledKanjiList
        className="KanjiList"
        style={{ display: !isVisible ? "none" : "block" }}
      >
        {kanjis.map((kanji, index) => {
          return (
            <Level key={index}>
              <div className="level-item">
                <span className="kanji">{kanji.kanji.query}</span>
                <div className="meaning">{kanji.kanji.meaning}</div>
                <span className="icon has-text-info">
                  <Eye onClick={handleView} />
                </span>
                <span className="icon has-text-danger">
                  <Delete onClick={handleDelete} />
                </span>
              </div>
            </Level>
          );
        })}
      </StyledKanjiList>
      <div style={{ display: isVisible ? "none" : "block" }}>
        <button className="button is-fullwidth" onClick={handleView}>
          <ArrowLeft /> Go back to results
        </button>
        <KanjiDetails kanji={selectedKanji} />
      </div>
    </React.Fragment>
  );
};

export default KanjiList;
