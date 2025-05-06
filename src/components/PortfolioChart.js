import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PortfolioChart({ portfolio }) {
  const data = portfolio.map((item) => ({
    name: item.symbol,
    value: item.price * item.shares,
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default PortfolioChart;
