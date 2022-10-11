import React from 'react';
import './QuizDetails.css'

const QuizDetails = ({quiz}) => {
    const {question,options}= quiz;
    // console.log(quiz);
    const handleAddToCard = quiz =>{
        console.log(quiz)
    }
    return (
        <div className='quiz-info'>
            <h2>Question: {question}</h2>
            
            {
                options.map((option, index )=> <div className='quiz-question' key={index} onClick={()=>handleAddToCard(quiz)}>{option}</div>)
            }
        </div>
    );
};

export default QuizDetails;