import React from 'react';
import ConfettiMaker from '../components/ConfettiMaker';

import { Typography, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

export default function CategoryPage(props) {
  return (
    <section>
      <div className="homePage move-down8">
        <ConfettiMaker />
        <Typography variant="h2" style={{ color: "#afafaf"}}>Awesome choice!</Typography>
        <Typography variant="h1">Have fun!</Typography>
        <Button variant="contained" size="large" color="primary" component={Link} to="/" style={{ fontFamily: 'Fredoka One', fontSize: '1.2em', justifyContent: 'left', textTransform: 'lowercase', height: '2em', marginTop: '2em', backgroundColor: '#0082e6', color: '#fff', '&:hover': { color: '#000' }}}>
          Back to home
        </Button>
      </div>
    </section>
  )
}