import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Topic from '../topic/Topic';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
// import { Col, Row } from 'react-bootstrap';

const Home = () => {
    const topics =useLoaderData().data;
    console.log(topics)
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