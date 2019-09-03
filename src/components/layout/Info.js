import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  padding: 20px 10px;
  max-width: 450px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.8em;
  display: block;
  margin: auto;
`;

const Info = props => {
  return <StyledInfo>{props.children}</StyledInfo>;
};

export default Info;
