import React from 'react';
import ReactDOM from 'react-dom';

import Deck from './Components/RevealComponents/Deck';
import Slides from './Slides';

import './index.css';
import './Themes/override.css';
import 'reveal.js/dist/theme/dracula.css';


const App = () => (
  <div className="App">
    <Deck>{Slides}</Deck>
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
