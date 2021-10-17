import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import { Flex } from '../Components/Box';

const ClosingSlides = () => (
  <>
    <Slide>
      <h3>Conclusion</h3>
      <ul>
        <li>Solid unit testing can avoid common issues</li>
        <li>console.logs can be good in a pinch, but take time to implement and remove</li>
        <li>Stepping through your code in VSCode or the browser can be fiddly at first but usually more effective</li>
      </ul>

    </Slide>
    <Slide>
      <h3>Recommended resources</h3>
      <ul>
        <li><a href="https://buddy.works/tutorials/debugging-javascript-efficiently-with-chrome-devtools">Debugging JavaScript Efficiently with Chrome DevTools</a> (Blog)</li>
        <li><a href="https://www.youtube.com/watch?v=bcbxHLtCigo">Javascript Debugging Visual Studio Code & Chrome</a> (Video)</li>
      </ul>
    </Slide>
    <Slide>
      <h2>Thanks 💖</h2>
      <h5>Katie Walker @KatCodes</h5>
    </Slide>
  </>
)

export default ClosingSlides;
