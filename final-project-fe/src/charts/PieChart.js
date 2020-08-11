import * as React from 'react';
import { ArcSeries, Tooltip, ChartProvider, Arc } from 'rough-charts';
import { colors } from '../helpers/colors';

export default function PieChart({ data }) {
  return (
    <ChartProvider height={400} data={data} margin={{ top: 30, left: 0 }}>
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
