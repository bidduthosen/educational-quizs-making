import React from 'react';
import './QuizQuestion.css'

const QuizQuestion = ({option, handleAddToCard}) => {
    return (
        <div onClick={()=>handleAddToCard(option)} className='quiz-ques-info'>
            <h6>{option}</h6>
        </div>
    );
};

export default QuizQuestion;