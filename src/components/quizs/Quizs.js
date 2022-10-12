import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './Quizs.css';

const Quizs = () => {
    const quizData =useLoaderData().data;
    return (
        <div className='quiz-title'>
            <h2>Quize of {quizData.name}</h2>
            {
                quizData.questions.map(quiz => <QuizDetails 
                    key={quiz.id}
                    quiz ={quiz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quizs;