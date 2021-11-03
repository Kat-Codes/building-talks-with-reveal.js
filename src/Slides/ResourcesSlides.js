import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import Link from '../Components/Link';

const ResourcesSlides = () => (
  <Slide>
    <h3>Resources</h3>
    <ul>
      <li>
        Reveal.js: <Link href="revealjs.com">revealjs.com</Link>
      </li>
      <li>
        These slides:
        <Link href="building-talks-with-reveal-js.katcodes.co.uk">
          building-talks-with-reveal-js.katcodes.co.uk
        </Link>
      </li>
      <li>
        Repository for these slides:
        <Link href="github.com/Kat-Codes/building-talks-with-reveal.js">
          github.com/Kat-Codes/building-talks-with-reveal.js
        </Link>
      </li>
    </ul>
    <Note>Take my GitHub repo with a pinch of salt</Note>
  </Slide>
);

export default ResourcesSlides;
