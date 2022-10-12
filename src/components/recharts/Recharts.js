import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Recharts = ({data}) => {
    const {total,name} =data;
    return (
        <div>
            <LineChart width={300} height={400} data={data}>
                
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>

          <Line
        type="monotone"
        dataKey={total}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={name} stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Recharts;