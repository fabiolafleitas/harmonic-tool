import React from 'react';
import Chord from "./Chord";
import "./Area.css";

export default function Area(props) {
  return (
    <div className={`area area-${props.className}`}>
      <h2>{props.title}</h2>
      <div className="chords-container">
        {props.chords.map((chord) => 
          <Chord key={chord}
                chord={chord}
                isActive={props.lastActiveChord === chord}
                onNewChord={props.onNewChord}/>
        )}
      </div>
    </div>
  );
}