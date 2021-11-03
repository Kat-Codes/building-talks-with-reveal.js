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
        <li>Open source 🥳</li>
      </ul>
      <Note>What is Reveal.js?</Note>
    </SlideWithTitle>
    <Slide>
      <JSX code={revealExample} />
      <Note>
        <ul>
          <li>
            The slide you just saw for a short into into Reveal, this is what
            the code looks like
          </li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      <h3>Features of Reveal</h3>
      <ul>
        <li>
          HTML presentation - so you can use all your favourite web libraries
          and frameworks (like React)
        </li>
        <li>Has plugins and themes built in + allows custom ones</li>
        <ul>
          <li>Code snippets</li>
          <li>Markdown</li>
          <li>Math</li>
        </ul>
        <li>No-code editor available online</li>
      </ul>
      <Note>So what are some of the features of reveal?</Note>
    </Slide>
  </>
);

export default AboutRevealSlides;
