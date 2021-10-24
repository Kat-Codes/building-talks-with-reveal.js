import React, { useEffect } from 'react';
import { color } from 'styled-system';
import Reveal from 'reveal.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import revealOptions from './revealOptions';

import '../../notes';
import 'reveal.js/css/reveal.css';

const Deck = ({ options, children }) => {
  useEffect(() => {
    Reveal.initialize({ ...revealOptions, ...options });
  });
  return (
    <div className="reveal">
      <DecorativeBorder />
      <div className="slides">{children}</div>
    </div>
  );
};

const DecorativeBorder = () => (
  <BoxContainer>
    <DecorativeBox bg="#44625B" />
    <DecorativeBox bg="#EDC54D" />
    <DecorativeBox bg="#8F1812" />
  </BoxContainer>
);

const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  gap: 10px;
`;

const DecorativeBox = styled.span`
  /* width: 100px; */
  height: 20px;
  flex-grow: 1;
  background-color: yellow;
  ${color}
`;

Deck.propTypes = {
  children: PropTypes.node,
  options: PropTypes.string,
};

export default Deck;
