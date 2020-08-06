import React, { useState, useEffect } from 'react'
import {useHistory } from 'react-router-dom';

import CategoryDropdown from '../components/CategoryDropdown'
import SuggestionCard from '../components/SuggestionCard'
import TimePicker from '../components/TimePicker'
import SuggesterButtonBox from '../components/SuggesterButtonBox'

import sortActivities from '../helpers/sortActivities';

export default function SuggesterPage(props) {
  const [suggestionIndex, setSuggestionIndex] = useState(0)
  const [activitySuggestions, setActivitySuggestions] = useState([]);
  let history = useHistory();
  
  useEffect(()=> {
      const filteredActivities = sortActivities(props.activities, props.category, props.timeAvailable);
      setActivitySuggestions(filteredActivities);
  }, [props.activities, props.timeAvailable, props.category])

  const indexIncrementor = function() {
    let i = suggestionIndex;
    if (i >= activitySuggestions.length - 1) {
      setSuggestionIndex(0) 
    } else {
      setSuggestionIndex(i + 1);
    }
  }

  return (
    <div className="suggestorPage">
      <CategoryDropdown questions={props.categories} question={props.category}/>
      <TimePicker onChange={props.onTimeChange} timeAvailable={props.timeAvailable}/>
      {activitySuggestions.length > 0 ? <SuggestionCard activity={activitySuggestions[suggestionIndex]}/> : "There's nothing"}
      <SuggesterButtonBox onAccept={()=>history.push('/success')} onReject={indexIncrementor}/>
    </div>
  )
}