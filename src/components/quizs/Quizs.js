import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizs = () => {
    const quizData =useLoaderData().data.questions;
    return (
        <div>
            {
                quizData.map(quiz => <QuizDetails 
                    key={quiz.id}
                    quiz ={quiz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quizs;