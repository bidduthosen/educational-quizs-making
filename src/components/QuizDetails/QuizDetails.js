import React from 'react';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './QuizDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';

const QuizDetails = ({quiz}) => {
    const {question, options, correctAnswer}= quiz;
    const handleAddToCard = quiz =>{
        const exist =correctAnswer;
        if(exist === quiz){
            toast.success('Right Answere');
            
        }
        else{
            toast.warning('Wrong Answere');
        }
    };

    // toast
    const notification = (correctAnswer) => toast.info(`Correct Answer: ${correctAnswer}`);
    return (
        <Container>
            <div className='quiz-info'>
            <div className='quizze-icon'>
                <h4>Question: {question}</h4>
            <div onClick={()=>notification(correctAnswer)}>
                <FontAwesomeIcon className='eye-icon' icon={faEye}></FontAwesomeIcon>
            </div>
            <ToastContainer></ToastContainer>
            </div>
            <div className='quiz-question'>
                {
                    options.map((option, index )=> <QuizQuestion key={index} handleAddToCard={handleAddToCard} option={option}></QuizQuestion>)
                }
            </div>
        </div>
        </Container>
    );
};

export default QuizDetails;