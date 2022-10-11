import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Topic from '../topic/Topic';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const Home = () => {
    const topics =useLoaderData().data;
    return (
        <Container>
            <Header></Header>
            <div className='topic-container'>
            {
                topics.map(topic=> <Topic 
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            </div>
        </Container>
    );
};

export default Home;