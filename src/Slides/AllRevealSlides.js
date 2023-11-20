import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const AboutRevealSlides = () => (
  <>
    <Slide>
      <SlideWithTitle title="What is Reveal.js?">
        <ul>
          <li>Framework for creating presentations with HTML</li>
          <li>My demos will be using React, but this is optional!</li>
          <li>Open source</li>
        </ul>
        <Note>
          So let's get into it! What is Reveal.js? A framework. In this talk I
          will be using React as my HTML rendering library of choice but this is
          completely optional
        </Note>
      </SlideWithTitle>
    </Slide>
    <Slide>
      <Slide transition="slide">
        <h3>Features of Reveal</h3>
      </Slide>
    <Slide transition="slide">
      <ul>
        <li>
          Very flexible HTML library, so can be used with all your favourite web libraries (like React)
        </li>
        <li>No-code editor available online</li>
        </ul>
              <Note>
        <ul>
          <li>So what are some of the features of reveal?</li>
          <li>
            For example, both in previous jobs and my current one, I use React
            with some libraries like styled components so I'm very comfortable
            with them, therefore I can use them while I built these slides and
            it felt very intuitive.
            </li>
            <li>
            There is also the option to use this library with no code! So you
            can make use of all the great features without needing to code
            yourself
          </li>
        </ul>
      </Note>
      </Slide>
      <SlideWithTitle transition="slide" title="Has plugins and themes built in, and allows custom ones"> 
        <ul>
          <li>Code snippets</li>
          <li>Markdown</li>
          <li>Math</li>
        </ul>
      <Note>
        <ul>
          <li>
            If you don't want to create your colour scheme from scratch, there
            are some lovely themes built in
          </li>
        </ul>
      </Note>
      </SlideWithTitle>
        <section data-auto-animate data-transition="zoom">
          <h4 >And of course...</h4>
        </section>
      <section data-auto-animate>
          <h4>And of course...</h4>
          <h4>Animations!</h4>
        </section>
    </Slide>
  </>
);

export default AboutRevealSlides;
