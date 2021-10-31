import React from 'react';
import Note from '../Components/Notes/note';
import Slide from '../Components/RevealComponents/Slide';

const WhyDontUseSlides = () => (
  <>
    <Slide>
      <Slide>
        <h4>Why might you not want to use reveal?</h4>
      </Slide>
      <Slide transition="slide">
        <ul data-auto-animate>
          <li>Node modules size</li>
          <li>
            Potential rabbit hole with repo setup, code quality tools,
            deployment etc
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
              quickly, so you can end up with a lot of storage taken up.
              However, if you've used something like Keynote, you know that also
              takes up a lot of storage. At least with Reveal you can use git
            </li>
            <li>
              You might add linting.. then a cicd pipeline.. then tests? (how
              far is too far?)
            </li>
          </ul>
        </Note>
      </Slide>
    </Slide>
  </>
);

export default WhyDontUseSlides;
