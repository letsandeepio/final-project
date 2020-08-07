import React from 'react';
import Mic from './mic';

import { Typography } from '@material-ui/core';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';

const Dictaphone = ({ onCommand }) => {
  const commands = [
    {
      command: "I've got *",
      callback: (duration) => onCommand(duration)
    },
    {
      command: 'I have *',
      callback: (duration) => onCommand(duration)
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
