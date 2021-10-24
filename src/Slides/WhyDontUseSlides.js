import React from 'react';
import Note from '../Components/Notes/note';
import Slide from '../Components/RevealComponents/Slide';

const WhyDontUseSlides = () => (
  <>
    <Slide>
      <h3>Why might you not want to use reveal?</h3>
    </Slide>
    <Slide>
      <ul>
        <li>Node modules can get big quickly</li>
        <li>
          Potential rabbit hole - You might add linting.. then a cicd pipeline..
          tests?
        </li>
        <li>
          Some layouts might take longer than using a traditional prsentation
          software
        </li>
        <li>Sometimes you just don't feel like writing code</li>
      </ul>
      <Note>
        <ul>
          <li>
            It's pretty common knowledge that node_modules grow in size very
            quickly, so you can end up with a lot of storage taken up. However,
            if you've used something like Keynote, you know that also takes up a
            lot of storage. At least with Reveal you can use git
          </li>
        </ul>
      </Note>
    </Slide>
  </>
);

export default WhyDontUseSlides;
