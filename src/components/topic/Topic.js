
import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';


const Topic = ({topic}) => {
    const {id, name, logo, total}= topic;
    return (
        <div className='topic-info'>
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className='topic-text'>
                <h4>{name}</h4>
                <p>Total quizs: {total}</p>
                <Link to={`/quizs/${id}`}><button>Practies &rarr;</button></Link>
            </div>
        </div>
    );
};

export default Topic;