import React from 'react';
import Mic from './mic';

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
      command: "I got *",
      callback: (duration) => onCommand(duration)
    },
    {
      command: "got *",
      callback: (duration) => onCommand(duration)
    },
    {
      command: 'I have *',
      callback: (duration) => onCommand(duration)
    },
    {
      command: 'have *',
      callback: (duration) => onCommand(duration)
    },
    {
      command: 'what should i do',
      callback: () => onAsk(0)
    },
    {
      command: 'should i do',
      callback: () => onAsk(0)
    },
    {
      command: 'i do',
      callback: () => onAsk(0)
    },
    {
      command: 'what should i watch',
      callback: () => onAsk(1)
    },
    {
      command: 'should i watch',
      callback: () => onAsk(1)
    },
    {
      command: 'i watch',
      callback: () => onAsk(1)
    },
    {
      command: 'where should i eat',
      callback: () => onAsk(2)
    },
    {
      command: 'what should i eat',
      callback: () => onAsk(2)
    },
    {
      command: 'should i eat',
      callback: () => onAsk(2)
    },
    {
      command: 'what should i cook',
      callback: () => onAsk(3)
    },
    {
      command: 'should i cook',
      callback: () => onAsk(3)
    },
    {
      command: 'what else could i do',
      callback: () => onAsk(4)
    },
    {
      command: 'else could i do',
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
      className="dictaphone"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '400px',
          flexDirection: 'column'

        }}
      >
        <div className="speech">
          {transcript ? transcript : ''}
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
