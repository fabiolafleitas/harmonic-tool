import React, {useState} from 'react';
import Header from './components/Header';
import Area from './components/Area';
import Sequence from './components/Sequence';
import {settings} from './data/settings.js';
import './App.css';

function App() {
  const [sequence, setSequence] = useState([]);
  const [lastChord, setLastChord] = useState('');

  function handleNewChord(chord){
    setSequence(prevSequence => [...prevSequence, chord]);
    setLastChord(chord);
  }

  return (
    <div>
      <Header></Header>      
      <div className="area-container">
        {settings.areas.map((area, index) => 
          <Area key={area.title}
                className={area.className}
                title={area.title}
                chords={area.chords}
                lastActiveChord={lastChord}
                onNewChord={handleNewChord}/>
        )}
      </div>
      <Sequence sequence={sequence}/>
    </div>
  );
}

export default App;
