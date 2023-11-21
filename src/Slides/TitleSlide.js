import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';

const TitleSlide = () => (
  <Slide>
    <h2>Building talks with Reveal.js (with React)</h2>
    <p>Katie Walker</p>
    <Note>
      <ul>
        <li>1</li>
        <li>Hi all</li>
        <li>Intro: Spotity, platform</li>
        <li>This talk is about</li>
        <li>I'm not affiated or an expert, just love web</li>
        <li>Questions</li>
      </ul>
    </Note>
  </Slide>
);

export default TitleSlide;
