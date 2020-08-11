import React from 'react';
import Mic from './mic';

import { Typography } from '@material-ui/core';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';

const Dictaphone = ({ onCommand, onAsk }) => {
  const commands = [
    {
      command: "I've got *",
      callback: (duration) => onCommand(duration)
    },
    {
      command: 'I have *',
      callback: (duration) => onCommand(duration)
    },
    {
      command: 'what should i do',
      callback: () => onAsk(0)
    },
    {
      command: 'what should i watch',
      callback: () => onAsk(1)
    },
    {
      command: 'where should i eat',
      callback: () => onAsk(2)
    },
    {
      command: 'what should i cook',
      callback: () => onAsk(3)
    },
    {
      command: 'what else could i do',
      callback: () => onAsk(4)
    }
  ];

  const { transcript, listening } = useSpeechRecognition({
    commands
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'column'
      }}
    >
      <div
        style={{
          // marginTop: '5em',
          display: 'flex',
          alignItems: 'center',
          width: '400px',
          flexDirection: 'column'

        }}
      >
        <div className="speech">
          {transcript ? transcript : 'Try saying, I have 30 minutes.'}
        </div>
        <Mic
          listening={listening}
          onClick={() =>
            listening
              ? SpeechRecognition.stopListening()
              : SpeechRecognition.startListening()
          }
        />
      </div>
    </div>
  );
};
export default Dictaphone;
