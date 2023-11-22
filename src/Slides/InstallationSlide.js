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

const App = () => {
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
<section data-transition="fade">
  <h3>Has lots of plugins built in</h3>
  <ul>
    <li>Speaker notes</li>   
    <li>Code snippets</li>
    <li>Markdown</li>
    <li>Math</li>
    <li>.. and allows you to build custom ones</li>
  </ul>
  <aside class="notes">Reveal has...</aside>
</section>
`;

const InstallationSlide = () => (
  <>
    <Slide>
      <h3>Installation</h3>
      <Bash code={npmInstall} />
      <JSX code={initialise} />
      <Note>
        So you're like wow! Sign me up, this looks amazing. How do I get
        started?!
      </Note>
    </Slide>
    <section data-auto-animate data-transition="fade">
      <h5>And our slides look like this...</h5>
      <JSX code={revealExample} />
      <Note>
        <ul>
          <li>This is what this slide looks like in React.</li>
          <li>You can see ....</li>
        </ul>
      </Note>
    </section>
  </>
);

export default InstallationSlide;
