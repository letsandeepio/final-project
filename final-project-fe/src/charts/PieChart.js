import * as React from 'react';
import { ArcSeries, Tooltip, ChartProvider, Arc } from 'rough-charts';
import { colors } from '../helpers/colors';

const data = [
  { name: 'Eat', subtotal: 10 },
  { name: 'Watch', subtotal: 13 },
  { name: 'Cook', subtotal: 11 },
  { name: 'Others', subtotal: 15 }
];

export default function BarChart(props) {
  return (
    <ChartProvider
      height={400}
      data={data}
      margin={{ top: 30, left: 0 }}
      {...props}
    >
      <ArcSeries dataKey="subtotal">
        {(item, itemProps, index) => (
          <Arc
            key={index}
            {...itemProps}
            options={{ fill: colors[index % colors.length] }}
          />
        )}
      </ArcSeries>
      <Tooltip>{({ name, subtotal }) => `${name}: ${subtotal}`}</Tooltip>
    </ChartProvider>
  );
}
