import React, { useState } from 'react';
import Mic from './mic';
import { Typography } from '@material-ui/core';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';

const Dictaphone = () => {
  const [message, setMessage] = useState('');
  const commands = [
    {
      command: "I've got *",
      callback: (duration) => console.log(`User got ${duration}`)
    },
    {
      command: 'I have *',
      callback: (duation) => console.log(`User got ${duation}`)
    }
  ];

  const { transcript, resetTranscript, listening } = useSpeechRecognition({
    commands
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <Typography variant="h6">
        {transcript ? transcript : 'Try saying, I have got 30 minutes.'}
      </Typography>
      <Mic listening={listening} onClick={SpeechRecognition.startListening} />
    </div>
  );
};
export default Dictaphone;
