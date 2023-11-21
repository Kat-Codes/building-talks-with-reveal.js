import React from 'react';
import styled from 'styled-components';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutRevealSlides = () => (
  <>
    <Slide>
      <Slide>
        <img
          src="image/reveal.png"
          alt="Screenshot of console showing 139 vulnerabilities"
        />
        <Note>
          <ul>
            <li>So what is reveal.js?</li>
            <li>Framework for creating presentations with HTML</li>
            <li>
              The slides you're seeing has been created with the framework
            </li>
            <li>
              These slides are made completely of code and a few extra things
              embedded like images, but all of the structure, text, colors have
              been defined in code
              <li>Open source</li>
            </li>
          </ul>
        </Note>
      </Slide>
    </Slide>
    <Slide>
      <Slide transition="slide">
        <h3>Features of Reveal</h3>
      </Slide>
      <Slide transition="slide">
        <ul>
          <li>
            Very flexible HTML framework, so can be used with all your favourite
            web libraries (like React)
          </li>
          <li>My demos will be using React, but this is optional!</li>
          <li>No-code editor available online</li>
        </ul>
        <Note>
          <ul>
            <li>So what are some of the features of reveal?</li>
            <li>
              For example, both in previous jobs and my current one, I use React
              so I'm very comfortable with it, therefore I can use them while I
              built these slides and it felt very intuitive.
            </li>
            <li>
              There is also the option to use this library with no code! So you
              can make use of all the great features without needing to code
              yourself
            </li>
          </ul>
        </Note>
      </Slide>
      <SlideWithTitle transition="slide" title="Has lots of plugins built in">
        <ul>
          <li>Speaker notes</li>
          <li>Code snippets</li>
          <li>Markdown</li>
          <li>Math</li>
          <li>.. and allows you to build custom ones</li>
        </ul>
        <Note>
          It has a bunch of plugins built in that allow all the usual features
          of a presentation software plus some extra things
        </Note>
      </SlideWithTitle>
      <Slide transition="slide">
        <h4>Accessibility</h4>
        <Note>
          <ul>
            <li>I mean accessibility in two ways here:</li>
            <li>
              Firstly, if you build your slides following web accessibility
              standards, then people that use screen readers can read all the
              text on your slides by accessing the slides through their device
              and have access to alt descriptions on things like images.
            </li>
            <li>
              In another sense, if you opened up the slides on your phone,
              hopefully it's obvious how easy it was to do that. No app
              installations, signing in to things etc. It's just like accessing
              a website
            </li>
          </ul>
        </Note>
      </Slide>
      <Slide transition="slide">
        <h4>Themes!</h4>
        <Flex>
          <img width="250px" src="image/themes/black.png" alt="Black theme" />
          <img width="250px" src="image/themes/blood.png" alt="Blood theme" />
          <img
            width="250px"
            src="image/themes/dracula.png"
            alt="Dracula theme"
          />
        </Flex>
        <Flex>
          <img width="250px" src="image/themes/league.png" alt="League theme" />
          <img width="250px" src="image/themes/sky.png" alt="Sky theme" />
          <img width="250px" src="image/themes/white.png" alt="White theme" />
        </Flex>
        <Note>
          If you don't want to create your colour scheme and select font
          pairings from scratch, there are some lovely themes built in
        </Note>
      </Slide>
      <section data-auto-animate data-transition="zoom">
        <h4>And of course...</h4>
      </section>
      <section data-auto-animate>
        <h4>And of course...</h4>
        <h4>Animations!</h4>
      </section>
    </Slide>
  </>
);

export default AboutRevealSlides;
