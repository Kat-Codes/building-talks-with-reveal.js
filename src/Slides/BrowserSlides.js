import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import { Flex } from '../Components/Box';

const BrowserSlides = () => (
  <>
    <Slide>
      <h2>Debugging with the browser</h2>
      <Note>
        <ul>
          <li>boop</li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      <h3>Chrome tools</h3>
      <img src='./image/chrometab.png' />
      <Note>
        <ul>
          <li>You can go to the sources tab</li>
          <li>Navigate through your files</li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      <img src='./image/chromebreakpoint.png' />
      <Note>
        <ul>
          <li>You can add breakpoints</li>
          <li>These can be triggered by performing the action that should hit the code</li>
          <li>Whether that's refreshing or in this case clicking the toggle</li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      <img src='./image/chromebreakpointpaused.png' />
    </Slide>
    <Slide>
      <Flex>
        <ul>
          <h4>Pros</h4>
          <li>Easy to trigger the code you want to test</li>
          <li>Easy to see state, variables and step through code</li>
          <li>Similar functionality across browsers</li>
        </ul>
        <ul class="fragment">
          <h4>Cons</h4>
          <li>Bundled code is much harder to work with</li>
          <li>Interface can be overwhelming at start</li>
        </ul>
      </Flex>
    </Slide>
  </>
)

export default BrowserSlides;
