import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Bash from '../Components/Highlight/Bash';
import JSX from '../Components/Highlight/JSX';

const npmInstall = `
npm install reveal.js
`;

const initialise = `
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();
`;

const InstallationSlide = () => (
  <Slide>
    <h3>Installation</h3>
    <Bash code={npmInstall} />
    <JSX code={initialise} />
  </Slide>
);

export default InstallationSlide;
