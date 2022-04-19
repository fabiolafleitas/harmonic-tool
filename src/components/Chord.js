 import React from "react";
 import "./Chord.css"

 export default function Chord(props){
  const btnClasses = `chord-btn ${props.isActive ? 'btn-pulse' : ''}`;

  function handleChordClick(event){
    props.onNewChord(event.target.innerText);
  }

   return (
    <button type='button'
            className={btnClasses}
            onClick={handleChordClick}>
        {props.chord}
    </button>
   );
 }