import React from 'react';
import styled from 'styled-components';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import JSX from '../Components/Highlight/JSX';
import StyledComponentSlide from './StyledComponentSlide';
import CSSAnimationSlide from './CSSAnimationSlide';
import Link from '../Components/Link';

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

const Game = styled.div`
height: 500px;
width: 100%;
`;

const WhyUseSlides = () => {
  return (
    <>
      <Slide>
        <Slide>
          <h3>Why should I use it over, say Keynote?</h3>
          <Note>
            So I've mentioned the facts of what Reveal includes, what the code
            looks like, but why should I use it?
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
            have
          </h4>
          <Note>
            This deck was bootstrapped with Create React App, so it was pretty
            quick to get up and running and it feels very familar, with little
            to no learning curve
          </Note>
        </Slide>
        <Slide data-auto-animate>
          <JSX code={aboutRevealBefore} />
          <Note>
            I showed you the setup and how to setup slides, but how can we use
            React even further to write better code
          </Note>
        </Slide>
        <Slide data-auto-animate>
          <JSX code={aboutRevealAfter} />
        </Slide>
        <StyledComponentSlide />
        <Slide>
          <h3>CSS animations</h3>
        </Slide>
        <CSSAnimationSlide transition="fade" />
        <Slide data-state="stats">
          <Game>
            <iframe frameBorder="0" title="efs" src="https://freehtml5games.org/games/tetris-cube/index.html" width="600px" height="600px" scrolling="no" />
            <aside>Credit: <Link href="https://codepen.io/triboot">https://freehtml5games.org/view/Tetris-Cube.html</Link></aside>
          </Game>
        </Slide>
      </Slide>
    </>
  );
};

export default WhyUseSlides;
