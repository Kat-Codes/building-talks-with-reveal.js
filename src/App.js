import React from 'react';
import Deck from './Components/RevealComponents/Deck';
import Slides from './Slides';

// import './Themes/darcula.css';
import 'reveal.js/css/theme/black.css';
import './Themes/override.css';

const App = () => (
  <div className="App">
    <Deck>{Slides}</Deck>
  </div>
);

export default App;
