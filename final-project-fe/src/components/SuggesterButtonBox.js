import React from 'react';
import SuggesterButton from './SuggesterButton';


export default function SuggesterButtonBox(props) {

  return (
    <div>
    <SuggesterButton
      onClick={props.onReject}
      style={{
        fontFamily: 'Fredoka One',
        fontSize: '1.2em',
        justifyContent: 'left',
        textTransform: 'lowercase',
        height: '2em',
        backgroundColor: '#d12441',
        color: '#fff' }} >
          Later
    </SuggesterButton>
    <SuggesterButton
      onClick={props.onAccept}
      style={{
        fontFamily: 'Fredoka One',
        fontSize: '1.2em',
        justifyContent: 'left',
        textTransform: 'lowercase',
        height: '2em',
        backgroundColor: '#15c363',
        color: '#fff' }}>
          Now
      </SuggesterButton>
    </div>
  )
}