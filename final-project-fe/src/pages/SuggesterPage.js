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
      <TimePicker />
      <SuggestionCard activity={suggestion} />
      <SuggesterButtonBox />
    </div>
  )
}