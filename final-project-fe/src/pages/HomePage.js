import React from 'react';
import { Typography } from '@material-ui/core';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <section className="move-down8">
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
      </section>
      <section
        style={{
          marginTop: '3em',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src="./images/imagination.svg"
          alt="welcome"
          style={{
            width: '400px'
          }}
        />
      </section>
    </Container>
  );
}
