import React from 'react';
import Container from '@material-ui/core/Container';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

import { Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Dashboard() {
  return (
    <section>
      <div className="homePage move-down8">
        <Typography variant="h3">All of your stats in one place!</Typography>
        <Typography variant="h1">Dashboard</Typography>
        <Container maxWidth="sm" style={{ marginTop: '3em' }}>
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
          <Card className="graph-card">
            <CardContent>
              <div>
                <BarChart />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h3">
                    Completed Activities by Month
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="graph-card">
            <CardContent>
              <div>
                <PieChart />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h3">
                    Incomplete Activities by Category
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="graph-card">
            <CardContent>
              <div>
                <PieChart />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '30px'
                  }}
                >
                  <Typography variant="h3">
                    Complete Activities by Category
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
      <div style={{ height: '8em' }}></div>
    </section>
  );
}
