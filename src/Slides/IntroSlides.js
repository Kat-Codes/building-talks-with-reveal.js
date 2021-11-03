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
      <p color="black">✨Slides✨</p>
      <Note>
        The slides are accessible via this QR code to follow along with. I'll
        link again at the end if you want to reference them later
      </Note>
    </Slide>
    <Slide>
      <h3>About me</h3>
      <Note>[Notes here]</Note>
    </Slide>
  </>
);

export default IntroSlides;
