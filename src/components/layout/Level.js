import React from "react";
import styled from "styled-components";
import { Colors } from "../../helpers/theme";

const StyledLevel = styled.div`
  .level-item {
    width: auto;
    background-color: hsl(0, 0%, 96%);
    color: hsl(0, 0%, 48%);
    width: 100%;
    justify-content: left;
    border-radius: 2px;
    padding: 6px 10px;
    box-shadow: 0px 2px 14px -3px rgba(51, 51, 51, 0.2);
  }

  .level-left,
  .level-right {
    min-width: 48%;
    display: inline-block;
  }

  .level-left {
    margin-right: 2%;
  }

  svg {
    margin-bottom: -5px;
  }

  a {
    border-bottom: none;
  }

  a:hover {
    color: ${Colors.main}
    transition: all .3s ease-in;
  }

  span {
    margin-right: 15px;
  }

  strong {
    margin-right: 5px;
  }
`;

const Level = props => {
  return <StyledLevel className="level">{props.children}</StyledLevel>;
};

export default Level;
