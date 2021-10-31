import React from 'react';
import styled from 'styled-components';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';

const styledComponentsSnippet = `
const StyledComponentSlide = props => (
    <Slide {...props}>
      <StyledHeader>Styled Components</StyledHeader>
      <JSX code={styledComponents} />
    </Slide>
  );
  
  const StyledHeader = styled.h3'
    &&& {
      color: cyan;
      font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    }
  ';
  
  export default StyledComponentSlide;
  `;

const StyledComponentSlide = props => (
  <Slide {...props}>
    <StyledHeader>Styled Components</StyledHeader>
    <JSX code={styledComponentsSnippet} />
  </Slide>
);

const StyledHeader = styled.h3`
  &&& {
    color: cyan;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  }
`;

export default StyledComponentSlide;
