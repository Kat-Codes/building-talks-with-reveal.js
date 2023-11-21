import React from 'react';
import styled from 'styled-components';
import Note from '../Components/Notes/note';
import Link from '../Components/Link';

const Flex = styled.div`
  display: flex;
  justify-content: center;

`;

const Box = styled.div`
  padding: 20px;
`;


const ResourcesSlides = () => (
  <>
  <section data-auto-animate data-transition="fade">
    <Flex>
      <Box>
        <ul>
      <li>
        Slides:
        <Link href="building-talks-with-reveal-js.katcodes.co.uk">
          building-talks-with-reveal-js.katcodes.co.uk
        </Link>
      </li>
      <li>
        Repository for these slides:
        <Link href="github.com/Kat-Codes/building-talks-with-reveal.js">
          github.com/Kat-Codes/building-talks-with-reveal.js
        </Link>
          </li>
        <li>
        Find me at: <Link href="https://www.linkedin.com/in/katcodes/">https://www.linkedin.com/in/katcodes/</Link>
      </li>
        </ul>
      </Box>
      <Box>
                <img
        width="250px"
        src="image/qr-code.png"
        alt="QR code that links to these slides"
      />
      </Box>
    </Flex>
    <Note>Take my GitHub repo with a pinch of salt</Note>
    </section>
    <section data-auto-animate data-transition="fade">
    <h3>Thanks! 💖</h3>
    <Flex>
      <Box>
        <ul>
      <li>
        Slides:
        <Link href="building-talks-with-reveal-js.katcodes.co.uk">
          building-talks-with-reveal-js.katcodes.co.uk
        </Link>
      </li>
      <li>
        Repository for these slides:
        <Link href="github.com/Kat-Codes/building-talks-with-reveal.js">
          github.com/Kat-Codes/building-talks-with-reveal.js
        </Link>
          </li>
        <li>
        Find me at: <Link href="https://www.linkedin.com/in/katcodes/">https://www.linkedin.com/in/katcodes/</Link>
      </li>
        </ul>
      </Box>
      <Box>
                <img
        width="250px"
        src="image/qr-code.png"
        alt="QR code that links to these slides"
      />
      </Box>
    </Flex>
    <Note>Take my GitHub repo with a pinch of salt</Note>
    </section>
    </>
);

export default ResourcesSlides;
