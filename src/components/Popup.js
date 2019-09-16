import React from "react";
import Home from "./Home";
import { Home as HomeIcon } from "react-feather";
import styled from "styled-components";
import { Colors } from "../helpers/theme";

// mainly small css tweaks for the popup
const StyledPopup = styled.div`
  position: relative;
  form {
    margin-bottom: 40px !important;
  }
  .Home-icon {
    background-color: ${Colors.main};
    color: white;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 80px;
    right: 15px;
    line-height: inherit;
    text-align: center;
    vertical-align: middle;
  }
`;

const Popup = () => {
  return (
    <StyledPopup className="Popup">
      <Home />
      <a
        target="_blank"
        className="Home-icon"
        href="./index.html#/kanjidex/kanjidex"
      >
        <HomeIcon />
      </a>
    </StyledPopup>
  );
};

export default Popup;
