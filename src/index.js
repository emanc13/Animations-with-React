import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as ReactLogo } from "./logo.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fade = (primaryColor, secondaryColor) => keyframes`
0% {
fill:${primaryColor};
}
50% {
 fill:${secondaryColor};
}
100%{
  fill:${primaryColor};
}
`;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;

const StyledLogo = styled(ReactLogo)`
  animation: ${rotate} infinite 20s linear;
  height: 25rem;
  width: 25rem;
  display: inline-block;
  margin: auto;
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 8s linear;
  }
  .circle {
    animation: ${pulse} infinite 4s linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  }
`;

const circlePulse = (colorOne, colorTwo) => keyframes`
0% {
  fill:${colorOne};
  stroke-width:10px
}
50% {
  fill:${colorTwo};
  stroke-width:2px
}
100%{
  fill:${colorOne};
  stroke-width:10px
}
`;
const StyledCircle = styled.svg`
  margin: auto;
  display: inline-block;
`;
const StyledInnerCircle = styled.circle`
  animation: ${props => circlePulse(props.colorOne, props.colorTwo)} infinite 4s
    linear;
`;

const circleOne = (
  <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
    <StyledInnerCircle
      colorOne="palevioletred"
      colorTwo="mediumslateblue"
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
    />
  </StyledCircle>
);
const circleTwo = (
  <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
    <StyledInnerCircle
      colorOne="tomato"
      colorTwo="hotpink"
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
    />
  </StyledCircle>
);

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <StyledLogo primaryColor="#61DAFB" secondaryColor="violet" />
      <div style={{ width: "200px", margin: "auto" }}>
        {circleTwo}
        {circleOne}
        {circleOne}
        {circleTwo}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
