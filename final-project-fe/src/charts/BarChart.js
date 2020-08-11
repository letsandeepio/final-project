import * as React from 'react';
import { BarSeries, Tooltip, ChartProvider, XAxis, YAxis } from 'rough-charts';

const data = [
  { name: 'Jan', subtotal: 90 },
  { name: 'Feb', subtotal: 30 },
  { name: 'Mar', subtotal: 50 },
  { name: 'Apr', subtotal: 40 },
  { name: 'May', subtotal: 70 },
  { name: 'Jun', subtotal: 30 }
];

export default function BarChart() {
  return (
    <ChartProvider height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <BarSeries
        dataKey="subtotal"
        options={{
          fill: '#0082e6',
          strokeWidth: 2
        }}
      />
      <Tooltip />
    </ChartProvider>
  );
}
