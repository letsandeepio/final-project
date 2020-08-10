import React from 'react';
import { Typography } from '@material-ui/core';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import WomanHeadphonesSVG from '../components/WomanHeadphonesSVG';

// import womanHeadphonesSVG from '../../public/images/undraw_Imagination_re_i0xi';

export default function HomePage(props) {
  return (
    <section className="move-down8">
      {/* <div className="homePage center-text"> */}
      <div className="top-text homePage">
        <Typography variant="h3">don't know what to do?</Typography>
        <Typography variant="h1">we can help!</Typography>
        <Button
          variant="contained"
          size="large"
          color="#000"
          component={Link}
          to="/categories"
          style={{
            fontFamily: 'Fredoka One',
            fontSize: '1.2em',
            justifyContent: 'left',
            textTransform: 'lowercase',
            height: '2em',
            backgroundColor: '#0082e6',
            color: '#fff',
            '&:hover': { color: '#000' }
          }}
        >
          get started!
        </Button>
      </div>
      {/* </div> */}
      <div className="homepage-art-div">
        {/* <div className="homepage-art" > */}
        <div>
          <WomanHeadphonesSVG
            className="homepage-art"
            style={{ height: '2em' }}
          />
        </div>
      </div>
    </section>
  );
}
