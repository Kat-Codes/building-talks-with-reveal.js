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

// const Game = styled.div`
// height: 500px;
// width: 100%;
// /* background-color: white; */
// `;

const WhyUseSlides = () => {
  return (
    <>
      <Slide>
        <Slide>
          <h3>What else can I do with it?</h3>
          <Note>
            So I've mentioned the facts of what Reveal includes, what the code looks like, but why should I use it and what else can i do with it?
          </Note>
        </Slide>
        <Slide transition="slide">
          <h4>It's code, so it's re-usable!</h4>
          <h4>
            Create a boilerplate, set up layouts, make reusable components
          </h4>
        </Slide>
        <Slide transition="slide">
          <h4>
            Build with all your favourite libraries and knowledge you already
            have, such as..
          </h4>
          <Note>
            This deck was bootstrapped with Create React App, so it was pretty
            quick to get up and running and it feels very familar, with little
            to no learning curve
          </Note>
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
        {/* <Slide>
        <h3>Polls</h3>
        <iframe
          src="https://wall.sli.do/event/6jB1527TxNvnfbsmsuzVQU?section=d759af35-0e86-417a-aea6-b1556b469243"
          frameBorder="0"
          height="100%"
          width="100%"
          title="slide"
          scrolling="true"
        />
      </Slide> */}
        <CSSAnimationSlide transition="fade" />
        {/* <Slide data-state="stats">
          <Game>
            <iframe title="efs" src="https://www.play-tetris-online.com/tetris-html5/" width="600px" height="600px" scrolling="no" />
          </Game>
        </Slide> */}
      </Slide>
    </>
  );
};

export default WhyUseSlides;
