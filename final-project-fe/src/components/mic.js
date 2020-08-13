import React from 'react';
import MicNoneIcon from '@material-ui/icons/MicNone';

export default function mic({ listening, onClick }) {
  const isListening = listening ? 'listening' : 'Try saying I have 30 minutes';
  return (
    <div>
      <div
        className="container"
        style={{ transform: 'scale(.5)', margin: '-10px' }}
      >
        <span className={'pulse-button ' + isListening} onClick={onClick}>
          <MicNoneIcon style={{ fontSize: '3rem', marginTop: '1.5rem' }} />
        </span>
      </div>
    </div>
  );
}
