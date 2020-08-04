import React from 'react'

import CategoryDropdown from '../components/CategoryDropdown'
import SuggestionCard from '../components/SuggestionCard'
import TimePicker from '../components/TimePicker'
import SuggesterButtonBox from '../components/SuggesterButtonBox'

import {useHistory } from 'react-router-dom';

const suggestion = {title: "Enchiladas", duration: 90}

export default function SuggesterPage(props) {
  let history = useHistory();
  return (
    <div className="suggestorPage">
      <CategoryDropdown questions={props.categories} question={props.category}/>
      <TimePicker onChange={props.onTimeChange} timeAvailable={props.timeAvailable}/>
      <SuggestionCard activity={suggestion}/>
      <SuggesterButtonBox onAccept={()=>history.push('/success')} onReject={e => console.log("Rejected " + e)}/>
    </div>
  )
}