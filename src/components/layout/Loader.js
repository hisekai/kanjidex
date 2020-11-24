import React from "react";
import Img from "../../assets/koi.png";
import styled from "styled-components";

const StyledLoader = styled.div`
  display: block;
  text-align: center;
  padding: 50px;
  img {
    margin: auto;
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
  }
  h3 {
    font-size: 22px;
    margin-top: 40px;
  }
  .Loader-text:after {
    display: inline-block;
    animation: dotty steps(1, end) 2s infinite;
    content: "";
  }

  @keyframes spin {
    100% {
      -o-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @keyframes ellipsis {
    to {
      width: 20px;
    }
  }

  @keyframes dotty {
    0% {
      content: "";
    }
    25% {
      content: ".";
    }
    50% {
      content: "..";
    }
    75% {
      content: "...";
    }
    100% {
      content: "";
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <img src={Img} alt="Koi fish spinning" />
      <h3 className="Loader-text">Loading</h3>
    </StyledLoader>
  );
};

export default Loader;
