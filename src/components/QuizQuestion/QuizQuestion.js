import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import './QuizQuestion.css'

const QuizQuestion = ({option, handleAddToCard}) => {
    return (
        <div onClick={()=>handleAddToCard(option)} className='quiz-ques-info'>
            <h6>{option}</h6>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizQuestion;