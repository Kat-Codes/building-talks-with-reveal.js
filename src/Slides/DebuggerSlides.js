import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import { Flex } from '../Components/Box';
import JSX from '../Components/Highlight/JSX';

const DebuggerSlides = () => (
  <>
    <Slide>
      <h2>Debugging with VSCode</h2>
    </Slide>
    <Note>
      Perhaps a better solution for debugging is via your IDE. Using VSCode as it's a popular choice, but debugging as straightforward as some IDEs
    </Note>
    <Slide>
      <img src='./image/debugbtn.png'></img>
      <Note>To get started, clic on the run and debug symbol and click. it'll open a special terminal for debugging</Note>
    </Slide>
    <Slide>
      <img src='./image/orangebar.png'></img>
      <p>Now you're good to go!</p>
      <Note>You'll see this orange bar flash - this happens everytime the code runs and will stay orange when the code is paused</Note>
    </Slide>
    <Slide>
      <h3>Adding breakpoints</h3>
      <img src='./image/breakpoint1.png' />
      <Note>To pause the code, add a breakpoint somewhere</Note>
    </Slide>
    <Slide>
      <h3>Triggering the breakpoint</h3>
      <p>Using Node:</p>
      <JSX code='node example.js' />
      <img src="./image/noderun.png" />
    </Slide>
    <Slide>
      <p>Using tests:</p>
      <img src='./image/jestrun.png' />
    </Slide>
    <Slide>
      <Flex>
        <ul style={{ flex: 1 }}>
          <h4>Pros</h4>
          <li>Stepping through can give a lot of clarity</li>
          <li>Doesn't require any code you'll need to tidy afterwards</li>
          <li>Your code looks most familar in the IDE</li>
        </ul>
        <ul style={{ flex: 1 }} class="fragment">
          <h4>Cons</h4>
          <li>You need a way to trigger the code, which may require refactoring</li>
          <li>There can be limitations with some test runners and libraries</li>
        </ul>
      </Flex>
    </Slide>
  </>
)

export default DebuggerSlides;
