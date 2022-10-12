import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container } from 'react-bootstrap';

const Statistics = () => {
    const arrayData =useLoaderData().data;
    return (
        <Container>
            <div className='statistics'>
            <h2>Charts</h2>
            <div className='recharts'>
                <ResponsiveContainer height={300} width="90%">
                    <LineChart height={300} width={400} data={arrayData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        </Container>
    );
};

export default Statistics;