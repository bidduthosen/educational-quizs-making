import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Row>
                <Col sm={12} md={3}>
            <div className='header-img'>
                <img src="https://i.ibb.co/p1kgC5d/favicon-ico.jpg" alt="favicon-ico" />
            </div>

                </Col>
                <Col sm={12} md={8}>
            <div className='header-text'>
            <h3>Educational Quizzes and Put Them Online</h3>
            <p>An educational quiz is a simple, yet effective way to check learners’ knowledge. By putting them online, you can make the assessment process even easier. You no longer need to gather all your students into one room to complete a test, print worksheets for all participants, and check each test manually.</p>
            </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;