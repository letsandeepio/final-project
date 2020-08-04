import React from 'react'

import CategoryDropdown from '../components/CategoryDropdown'
import SuggestionCard from '../components/SuggestionCard'
import TimePicker from '../components/TimePicker'
import SuggesterButtonBox from '../components/SuggesterButtonBox'

const suggestion = {title: "Enchiladas", duration: 90}


export default function SuggesterPage(props) {
  return (
    <div className="suggestorPage">
      <CategoryDropdown questions={props.categories} />
      <TimePicker onChange={props.onTimeChange} timeAvailable={props.timeAvailable}/>
      <SuggestionCard activity={suggestion}/>
      <SuggesterButtonBox onAccept={e => console.log("Accepted " + e)} onReject={e => console.log("Rejected " + e)}/>
    </div>
  )
}