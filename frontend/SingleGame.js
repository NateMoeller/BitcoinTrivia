import React, { useState, useEffect, useCallback } from 'react';
import Transition from './Transition';
import Ready from './Ready';
import Question from './Question';
import Gameover from './Gameover';

export default function SingleGame() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [time, setTime] = useState(1000);
    const [showReady, setShowReady] = useState(true);
    const [isCorrect, setCorrect] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const [showGameover, setShowGameover] = useState(false);
    const [numCorrect, setNumCorrect] = useState(0);

    // TODO: get these questions from somewhere else!
    const questions = [
        {
            id: 0,
            question: 'Who is the author of "The Bitcoin Standard"?',
            answers: [
                'Saifedean Ammous',
                'Parker Lewis',
                'Michael Saylor',
                'Preston Pysh'
            ],
            labels: [
                'People'
            ],
            difficulty: 0,
            answer: 0
        },
        {
            id: 1,
            question: 'Who invented Bitcoin?',
            answers: [
                'Craig Wright',
                'Vitalik Butrin',
                'Satoshi Nakomoto',
                'Elon Musk'
            ],
            labels: [
                'People'
            ],
            difficulty: 0,
            answer: 2
        },
        {
            id: 2,
            question: 'Bitcoin uses ___ algorithm',
            answers: [
                'Proof of Work',
                'Proof of Stake',
                'Proof of Keys',
                'Proof of Bananas'
            ],
            labels: [
                'Bitcoin'
            ],
            difficulty: 0,
            answer: 0
        }
    ]

    const startTimer = (newTime) => {
        setTime(newTime);
        return setInterval(countDown, 10);
    }

    const countDown = () => {
        setTime(prevTime => {
            const newTime = prevTime - 1;
            if (newTime === 0) {
                setTime(1000);
                setCorrect(false);
                setShowTransition(true);
            }
            return newTime;
        });
    }

    const onClickAnswer = (index) => {
        // TODO: use an api to check if it was the correct answer
        if (questions[questionIndex].answer === index) {
            setNumCorrect(prevNumCorrect => prevNumCorrect + 1);
            setCorrect(true);
        } else {
            setCorrect(false);
        }

        setTime(1000);
        setShowTransition(true);
    }

    const nextQuestion = () => {
        setShowTransition(false);
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
        } else {
            setShowGameover(true);
        }
        
    }

    const getContent = () => {
        if (showReady) {
            return <Ready setShowReady={setShowReady} />
        } else if (showTransition) {
            return <Transition nextQuestion={nextQuestion} correct={isCorrect} />;
        } else if (showGameover) {
            return <Gameover score={numCorrect} questions={questions} />
        }

        return (
            <Question
                startTimer={startTimer}
                time={time}
                question={questions[questionIndex]}
                onClickAnswer={onClickAnswer}
            />
        );
    }

    return getContent();
}