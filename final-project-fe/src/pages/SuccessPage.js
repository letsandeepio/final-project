import React from 'react';

import { Typography, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

export default function CategoryPage(props) {
  return (
    <section>
      <div className="homePage">
        <Typography variant="h2">Awesome choice!</Typography>
        <Typography variant="h3">Have fun!</Typography>
        <Button variant="contained" size="large" color="primary" component={Link} to="/" >
          Back to home
        </Button>
      </div>
    </section>
  )
}