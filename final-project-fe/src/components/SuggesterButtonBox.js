import React from 'react';
import SuggesterButton from './SuggesterButton';


export default function SuggesterButtonBox(props) {

  return (
    <>
      <SuggesterButton onClick={props.onClick}>Now</SuggesterButton>
      <SuggesterButton onClick={props.onClick}>Later</SuggesterButton>
    </>
  )
}