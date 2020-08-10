import React from 'react';
import MicNoneIcon from '@material-ui/icons/MicNone';

export default function mic({ listening, onClick }) {
  const isListening = listening ? 'listening' : '';
  return (
    <div>
      <div class="container" style={{ transform: 'scale(0.6)' }}>
        <span className={'pulse-button ' + isListening} onClick={onClick}>
          <MicNoneIcon style={{ fontSize: '3rem', marginTop: '1.5rem' }} />
        </span>
      </div>
    </div>
  );
}
