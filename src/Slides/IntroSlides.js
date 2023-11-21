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
      <p color="black">Slides:</p>
      <Link href="building-talks-with-reveal-js.katcodes.co.uk/">
        building-talks-with-reveal-js.katcodes.co.uk/
      </Link>
      <Note>
        <ul>
          <li>
            <li>1</li>
            {/* add accessibility feature */}
            As a little spoiler, one thing that's great about way of building presentations
            is that it's easily accessible online. Use this QR code or link to
            open a copy of slides yourself.
          </li>
          <li>
            I'll show the link again at the end if you decide you want to access
            them later.
          </li>
        </ul>
      </Note>
    </Slide>
  </>
);

export default IntroSlides;
