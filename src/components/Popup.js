import React from "react";
import Home from "./Home";
import styled from "styled-components";

// mainly small css tweaks for the popup
const StyledPopup = styled.div`
  position: relative;
  form {
    margin-bottom: 10px !important;
  }
`;

const Popup = () => {
  return (
    <StyledPopup className="Popup">
      <Home />
    </StyledPopup>
  );
};

export default Popup;
