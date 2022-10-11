import React from 'react';
import './QuizDetails.css'

const QuizDetails = ({quiz}) => {
    const {question,options}= quiz;
    console.log(quiz)
    return (
        <div className='quiz-info'>
            <h2>Question: {question}</h2>
            <div className='quiz-question'>
                <h6>{options[0]}</h6>
                <h6>{options[1]}</h6>
                <h6>{options[2]}</h6>
                <h6>{options[3]}</h6>
            </div>
        </div>
    );
};

export default QuizDetails;