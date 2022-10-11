
import React from 'react';
import './Topic.css';


const Topic = ({topic}) => {
    const { name, logo}= topic;
    return (
        <div className='topic-info'>
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className='topic-text'>
                <h4>{name}</h4>
                <button>Start Practies</button>
            </div>
        </div>
    );
};

export default Topic;