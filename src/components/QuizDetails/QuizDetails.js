import React, { useState } from 'react';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './QuizDetails.css'

const QuizDetails = ({quiz}) => {
    const {question,options,correctAnswer}= quiz;
    // console.log(quiz);
    const handleAddToCard = quiz =>{
        // console.log(quiz)
        const exist =correctAnswer;
        if(exist === quiz){
            alert('right');
        }
        else{
            alert('worng')
        }

    }
    return (
        <div className='quiz-info'>
            <h4>Question: {question}</h4>
            <div className='quiz-question'>
            {
                options.map((option, index )=> <QuizQuestion key={index} handleAddToCard={handleAddToCard} option={option}></QuizQuestion>)
            }
            </div>
        </div>
    );
};

export default QuizDetails;