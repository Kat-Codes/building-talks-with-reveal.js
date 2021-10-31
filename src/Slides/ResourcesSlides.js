import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';

const ResourcesSlides = () => (
  <Slide>
    <h3>Resources</h3>
    <ul>
      <li>Reveal.js: revealjs.com/</li>
      <li>These slides: building-talks-with-reveal-js.katcodes.co.uk</li>
      <li>
        GitHub for these slides:
        github.com/Kat-Codes/building-talks-with-reveal.js
      </li>
    </ul>
    <Note>[Notes here]</Note>
  </Slide>
);

export default ResourcesSlides;
