import React from 'react';
import './Sequence.css'

export default function Sequence(props){
  return (
    <div className="sequence-container">
      {props.sequence.map((chord, index) =>
        <div key={index} className="chord-dropdown">
          <div className="sequence-chord">
            <span>{chord}</span>
          </div>
          <div className="dropdown-content">
            <a href="#">&#215;</a>
            <a href="#">&#60;</a>
            <a href="#">&#62;</a>
          </div>
        </div>
      )}
    </div>
  );
}