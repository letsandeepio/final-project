import React, { useState } from 'react';

import { Typography, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

import AddActivityForm from '../components/AddActivityForm';


export default function CategoryPage(props) {
  return (
    <section>
      <AddActivityForm categories={props.categories}/>
    </section>
  )
}