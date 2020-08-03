import React from 'react';
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