import React from 'react';
import { Typography } from '@material-ui/core';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CategoryPage(props) {
  return (
    <section>
      <div className="homePage">
        <Typography variant="h2">don't know what to do?</Typography>
        <Typography variant="h3">we can help</Typography>
        <Button variant="contained" size="large" color="primary" component={Link} to="/categories" >
          get started!
        </Button>
      </div>
    </section>
  )
}