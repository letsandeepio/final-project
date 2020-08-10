import React from 'react';
import Container from '@material-ui/core/Container';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

import { Typography } from '@material-ui/core';

export default function Dashboard() {
  return (
    <section>
      <div className="homePage move-down8">
        <Typography variant="h2" style={{ color: '#afafaf' }}>
          All of your stats in one place!
        </Typography>
        <Typography variant="h1">Dashboard</Typography>
        <Container maxWidth="sm">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              transform: 'scale(0.7)'
            }}
          >
            <div>
              <Typography variant="h2" style={{ color: '#afafaf' }}>
                Pending Activities
              </Typography>
              <Typography variant="h1">10</Typography>
            </div>

            <div>
              <Typography variant="h2" style={{ color: '#afafaf' }}>
                Complete Activities
              </Typography>
              <Typography variant="h1">14</Typography>
            </div>
          </div>
          <div>
            <BarChart />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              Monthwise Breakup of Completed Activities
            </div>
          </div>
          <div>
            <PieChart />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              Categorywise Breakup of Incomplete Activities
            </div>
          </div>

          <div>
            <PieChart />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '30px'
              }}
            >
              Categorywise Breakup of complete Activities
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
