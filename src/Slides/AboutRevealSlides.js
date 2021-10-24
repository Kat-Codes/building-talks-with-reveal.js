import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';
import Note from '../Components/Notes/note';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const revealExample = `
import React from 'react';

const AboutRevealSlide = () => (
  <section data-transition="fade">
    <h3>What is Reveal.js?</h3>
    <ul>
      <li>Framework for creating presentations with HTML</li>
      <li>
        Comes with all the features you need, such as speaker notes, transitions
        and syntax highlighting for code snippets
      </li>
      <li>Open source 🥳</li>
    </ul>
    <aside class="notes">What is Reveal.js?</aside>
  </section>
);

export default AboutRevealSlide;
`;

const AboutRevealSlides = () => (
  <>
    <SlideWithTitle title="What is Reveal.js?">
      <ul>
        <li>Framework for creating presentations with HTML</li>
        <li>
          Comes with all the features you need, such as speaker notes,
          transitions and syntax highlighting for code snippets
        </li>
        <li>Open source 🥳</li>
      </ul>
      <Note>What is Reveal.js?</Note>
    </SlideWithTitle>
    <Slide>
      <JSX code={revealExample} />
    </Slide>
    <Slide>
      <h3>Features of Reveal</h3>
      <ul>
        <li>
          HTML presentation - so you can use all your favourite libraries and
          frameworks (like React)
        </li>
        <li>Has plugins built in & allows custom ones</li>
        <ul>
          <li>Code snippets</li>
          <li>Markdown</li>
          <li>Math</li>
        </ul>
        <li>No-code online editor available online</li>
      </ul>
    </Slide>
  </>
);

export default AboutRevealSlides;
