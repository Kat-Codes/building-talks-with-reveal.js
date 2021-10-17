import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';

const demoCode = `const basicComponent = () => (
    <h1>This is a basic component</h1>
);`;

export default function FirstSlide() {
  return (
    <Slide>
      <h3>Basic application data structures</h3>
      <div>
        <JSX code={demoCode} />
      </div>
    </Slide>
  );
}
