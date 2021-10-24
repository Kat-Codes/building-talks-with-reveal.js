import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import JSX from '../Components/Highlight/JSX';

const aboutReveal = `const AboutRevealSlide = () => (
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
);

export default AboutRevealSlide;
`;

const WhyUseSlides = () => (
  <>
    <Slide>
      <Slide>
        <h3>Why would you use reveal?</h3>
        <Note>
          So I've mentioned the facts of what Reveal includes, but why do I
          think you should use it?
        </Note>
      </Slide>
      <Slide>
        <h3>
          Build a boilerplate, set up layouts, reusable components (component
          library?)
        </h3>
      </Slide>
      <Slide>
        <JSX code={aboutReveal} />
      </Slide>
      <Slide>
        <h3>
          Build with all your favourite libraries and knowledge you already have
        </h3>
      </Slide>
      <Slide>
        <h3>Host your slides online</h3>
      </Slide>
    </Slide>
  </>
);

export default WhyUseSlides;
