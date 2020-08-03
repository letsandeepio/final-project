import React from 'react';
import SuggesterButton from './SuggesterButton';


export default function SuggesterButtonBox(props) {

  return (
    <div>
      <SuggesterButton onClick={props.onAccept}>Now</SuggesterButton>
      <SuggesterButton onClick={props.onReject}>Later</SuggesterButton>
    </div>
  )
}