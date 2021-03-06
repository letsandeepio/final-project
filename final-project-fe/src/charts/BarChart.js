import * as React from 'react';
import { BarSeries, Tooltip, ChartProvider, XAxis, YAxis } from 'rough-charts';
import { colors } from '../helpers/colors';

export default function BarChart({ data }) {
  return (
    <ChartProvider height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <BarSeries
        dataKey="subtotal"
        options={{
          fill: colors[0],
          strokeWidth: 2
        }}
      />
      <Tooltip />
    </ChartProvider>
  );
}
