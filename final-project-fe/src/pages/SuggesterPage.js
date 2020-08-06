import React, { useState } from 'react'

import CategoryDropdown from '../components/CategoryDropdown'
import SuggestionCard from '../components/SuggestionCard'
import TimePicker from '../components/TimePicker'
import SuggesterButtonBox from '../components/SuggesterButtonBox'
import sortActivities from '../helpers/sortActivities';


import {useHistory } from 'react-router-dom';

const activitySuggestions = [
  {title: "Korean BBQ", duration: 120},
  {title: "Enchiladas", duration: 90},
  {title: "Pizza Pizza", duration: 30},
  {title: "Chocolate Bar", duration: 5},
  {title: "Tacos", duration: 50},
  {title: "Grilled Cheese", duration: 15},
  {title: "Chicken Pot Pie", duration: 45},
  {title: "BBQ", duration: 60},
  {title: "Vegan Chicken", duration: 60},
  {title: "A&W", duration: 60},
  {title: "Tostitos", duration: 60},
  {title: "Boiled Food", duration: 60},
  {title: "7 Layer Dip", duration: 60}]

export default function SuggesterPage(props) {
  const [suggestionIndex, setSuggestionIndex] = useState(0)
  let history = useHistory();
  console.log(props.activities);
  console.log(props.timeAvailable);
  console.log(props.categories);
  console.log(sortActivities(props.activities, props.category, props.timeAvailable));

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
      <SuggestionCard activity={activitySuggestions[suggestionIndex]}/>
      <SuggesterButtonBox onAccept={()=>history.push('/success')} onReject={indexIncrementor}/>
    </div>
  )
}