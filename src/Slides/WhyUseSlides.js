import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import JSX from '../Components/Highlight/JSX';
import StyledComponentSlide from './StyledComponentSlide';
import CSSAnimationSlide from './CSSAnimationSlide';

const aboutRevealBefore = `
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

const aboutRevealAfter = `
const AboutRevealSlide = () => (
  <SlideWithTitle title="What is Reveal.js?">
  <ul>
    <li>Framework for creating presentations with HTML</li>
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
      <Slide transition="slide">
        <h4>
          Build with all your favourite libraries and knowledge you already have
        </h4>
        <Note>
          This deck was bootstrapped with Create React App, so it was pretty
          quick to get up and running and it feels very familar, with little to
          no learning curve
        </Note>
      </Slide>
      <Slide transition="slide">
        <h4>Create a boilerplate, set up layouts, make reusable components</h4>
      </Slide>
      <Slide data-auto-animate>
        <JSX code={aboutRevealBefore} />
      </Slide>
      <Slide data-auto-animate>
        <JSX code={aboutRevealAfter} />
      </Slide>
      <StyledComponentSlide />
      <Slide>
        <h3>CSS animations</h3>
      </Slide>
      <CSSAnimationSlide transition="fade" />
      <Slide transition="slide">
        <h3>Host your slides online</h3>
        <ul>
          <li>
            Can be hosted like any other static HTML site (GitHub pages, Netlify
            etc)
          </li>
          <li>
            Some people prefer going through slides at their own pace and can
            reference them later
          </li>
          <li>
            Accessible on mobile without any additional software or downloads
          </li>
        </ul>
      </Slide>
    </Slide>
  </>
);

export default WhyUseSlides;
