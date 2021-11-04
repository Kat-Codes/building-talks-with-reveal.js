import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import Link from '../Components/Link';

const IntroSlides = () => (
  <>
    <Slide>
      <img
        width="250px"
        src="image/qr-code.png"
        alt="QR code that links to these slides"
      />
      <p color="black">✨Slides✨</p>
      <Link href="building-talks-with-reveal-js.katcodes.co.uk/">
        building-talks-with-reveal-js.katcodes.co.uk/
      </Link>
      <Note>
        The slides are accessible via this QR code to follow along with. I'll
        link again at the end if you want to reference them later
      </Note>
    </Slide>
  </>
);

export default IntroSlides;
