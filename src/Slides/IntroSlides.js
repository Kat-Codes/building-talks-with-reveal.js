import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';

const IntroSlides = () => (
    <>
        <Slide>
            <h3>Preface</h3>
            <p>This is a talk!</p>
            <ul>
                <li>Intro</li>
                <li>Middle</li>
                <li>End</li>
            </ul>
            <Note>
               [Notes here]
            </Note>
        </Slide>

    </>
)

export default IntroSlides;
