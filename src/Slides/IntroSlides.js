import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';

const IntroSlides = () => (
    <>
        <Slide>
            <h3>Preface</h3>
            <p>Debugging web applications can be a pain sometimes, especially with no types and often the mix of front and back-end code in single repos</p>
            <aside>Good tests help a lot, but bugs can still slip through</aside>
            <Note>
                [read slide]
                Good tests do help a lot, but unfortunatly you will still probably run into issues where a function isn't behaving as you expect and you need manually debug
            </Note>
        </Slide>
        <Slide>
            <h3>Aims of this talk</h3>
            <ul>
                <li>Give an overview of different methods and discuss where they can be used best</li>
                <li>Show that with a bit of investment, debugging methods will make your bug hunting a lot life easier 🕵️‍♀️</li>
                <li>Provide some further resources to help you get started</li>
            </ul>
        </Slide>
    </>
)

export default IntroSlides;
