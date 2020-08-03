import React from 'react';
import CategoryButtonList from '../components/CategoryButtonList';
import GeneralBigButton from '../components/GeneralBigButton';
import { Typography } from '@material-ui/core';




export default function CategoryPage(props) {
  return (
    <section>
      <div className="homePage">
        <Typography variant="h2">don't know what to do?</Typography>
        <Typography variant="h3">we can help</Typography>
        <GeneralBigButton>get started!</GeneralBigButton>
      </div>




    </section>
  )
}


// return (
//   <div className="homePage">
//     <Typography variant="h1">Don't know what to do?</Typography>
//     <Typography variant="h2">Just ask!</Typography>
//     <TimePicker className="timePicker" onChange={props.onChange}/>
//     <CategoryButtonList className="CategoryButtonList" categories={props.categories} onChange={props.onChange}/>
//   </div>
// )