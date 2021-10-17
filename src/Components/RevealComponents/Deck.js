import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import revealOptions from './revealOptions';

import 'reveal.js/plugin/notes/notes.js';
// import 'reveal.js/plugin/math/math.js';
import 'reveal.js/css/reveal.css'

export default function Deck({ options, children }) {
  useEffect(() => {
    Reveal.initialize({ ...revealOptions, ...options });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
}
