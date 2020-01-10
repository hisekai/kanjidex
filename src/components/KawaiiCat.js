import React from "react";
import { Cat } from "react-kawaii";
import styled from "styled-components";

const StyledCat = styled.div`
  margin-top: 25px;
`;

const KawaiiCat = ({ mood }) => {
  return (
    <StyledCat>
      <Cat mood={mood} color="#FCAF58" size={150} />
    </StyledCat>
  );
};

export default KawaiiCat;
