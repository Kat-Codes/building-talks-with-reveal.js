import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import PropTypes from 'prop-types';
import revealOptions from './revealOptions';

import 'reveal.js/plugin/notes/notes';
// import 'reveal.js/plugin/math/math.js';
import 'reveal.js/css/reveal.css';

const Deck = ({ options, children }) => {
  useEffect(() => {
    Reveal.initialize({ ...revealOptions, ...options });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};

Deck.propTypes = {
  children: PropTypes.node,
  options: PropTypes.string,
};

export default Deck;
