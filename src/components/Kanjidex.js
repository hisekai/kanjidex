import React from "react";
import Home from "./Home";
import styled from "styled-components";

const StyledHome = styled.section`
  .actions {
    position: relative;
    top: 0 !important;
    form {
      max-width: 100% !important;
    }
  }
`;

const Kanjidex = () => {
  return (
    <StyledHome>
      <Home />
    </StyledHome>
  );
};

export default Kanjidex;
