import React from 'react';
import MicNoneIcon from '@material-ui/icons/MicNone';

export default function mic({ listening, onClick }) {
  const isListening = listening ? 'listening' : '';
  return (
    <div>
      <div class="container">
        <span className={'pulse-button ' + isListening} onClick={onClick}>
          <MicNoneIcon style={{ fontSize: '3rem', marginTop: '1.5rem' }} />
        </span>
      </div>
    </div>
  );
}
