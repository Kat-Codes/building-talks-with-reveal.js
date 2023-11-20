import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Bash from '../Components/Highlight/Bash';
import JSX from '../Components/Highlight/JSX';
import Note from '../Components/Notes/note';

const npmInstall = `
npm install reveal.js
`;

const initialise = `
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import revealOptions from './revealOptions';

const App = ({ children }) => {
  useEffect(() => {
    Reveal.initialize({
      ...revealOptions,
      plugins: [RevealNotes]
    });
  });
  return (
    <div className="reveal">
      {/* slides go here */}
    </div>
  );
};
`;

const revealExample = `
import React from 'react';

const AboutRevealSlide = () => (
  <section data-transition="fade">
    <h3>What is Reveal.js?</h3>
    <ul>
      <li>Framework for creating presentations with HTML</li>
      <li>This presentation is built using it 🤯</li>
      <li>My demos will be using React, but this is optional!</li>
      <li>Open source</li>
    </ul>
    <aside class="notes">What is Reveal.js?</aside>
  </section>
);

export default AboutRevealSlide;
`;

// todo: fix
const InstallationSlide = () => (
  <>
  <Slide>
    <h3>Installation</h3>
    <Bash code={npmInstall} />
    <JSX code={initialise} />
    </Slide>
    <Slide>
      {/* todo: make this the right code */}
      <JSX code={revealExample} />
      <Note>
        <ul>
          <li>This is what this slide looks like in React.</li>
          <li>You can see ....</li>
        </ul>
      </Note>
    </Slide>
  </>
);

export default InstallationSlide;
