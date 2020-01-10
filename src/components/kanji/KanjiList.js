import React, { useState } from "react";
import Level from "../layout/Level";
import KanjiDetails from "./KanjiDetails";
import styled from "styled-components";
import { Delete, Eye } from "react-feather";
import KanjiActions from "./KanjiActions";

const StyledKanjiList = styled.div`
  position: relative;
  margin-top: 30px;
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

    if (
      e.target.parentElement.parentElement.parentElement.querySelector(".kanji")
    ) {
      const item = e.target.parentElement.parentElement.parentElement.querySelector(
        ".kanji"
      ).innerHTML;
      kanjis.map(kanji => {
        if (kanji.kanji.query === item) {
          setSelectedKanji(kanji);
        }
        return kanji;
      });
    }
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
      {/* div for displaying the return button and save to deck button */}
      <div
        style={{ display: isVisible ? "none" : "block", position: "relative" }}
      >
        <KanjiActions handleView={handleView} />
        <KanjiDetails kanji={selectedKanji} />
      </div>
    </React.Fragment>
  );
};

export default KanjiList;
