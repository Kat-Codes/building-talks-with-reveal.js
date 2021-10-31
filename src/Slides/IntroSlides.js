import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';

const IntroSlides = () => (
  <>
    <Slide>
      <img
        width="250px"
        src="image/qr-code.png"
        alt="QR code that links to these slides"
      />
      <p color="black">View slides</p>
    </Slide>
    <Slide>
      <h3>About me</h3>
      <Note>[Notes here]</Note>
    </Slide>
  </>
);

export default IntroSlides;
