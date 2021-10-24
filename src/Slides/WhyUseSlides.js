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
        <h4>Why would you use reveal?</h4>
        <Note>
          So I've mentioned the facts of what Reveal includes, but why do I
          think you should use it?
        </Note>
      </Slide>
      <Slide transition="slide">
        <h4>Build a boilerplate, set up layouts, reusable components</h4>
      </Slide>
      <Slide transition="slide">
        <JSX code={aboutReveal} />
      </Slide>
      <Slide transition="slide">
        <h4>
          Build with all your favourite libraries and knowledge you already have
        </h4>
      </Slide>
      <Slide transition="slide">
        <p>[styled components example]</p>
      </Slide>
      <Slide transition="slide">
        <p>[css animation example]</p>
      </Slide>
      <Slide transition="slide">
        <h3>Host your slides online</h3>
        <ul>
          <li>
            Can be hosted like any other static HTML site (GitHub pages, Netlify
            etc)
          </li>
          <li>Some people prefer going through slides at their own pace</li>
          <li>People can reference them later</li>
          <li>
            Accessible on mobile without any additional software or downloads
          </li>
        </ul>
      </Slide>
    </Slide>
  </>
);

export default WhyUseSlides;
