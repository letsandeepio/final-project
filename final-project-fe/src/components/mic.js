import React from 'react';
import MicNoneIcon from '@material-ui/icons/MicNone';

export default function mic({ listening, onClick }) {
  const isListening = listening ? 'listening' : '';
  return (
    <div>
      <div className="container" style={{ transform: 'scale(.35)', margin: '-1.7em' }}>
        <span className={'pulse-button ' + isListening} onClick={onClick}>
          <MicNoneIcon style={{ fontSize: '3rem', marginTop: '1.5rem' }} />
        </span>
      </div>
    </div>
  );
}
