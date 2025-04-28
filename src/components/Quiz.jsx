

import React, { useEffect, useRef, useState } from 'react';
import { Question } from './Question';
import { Result } from './Result';

export const Quiz = ({quizData}) => {

    const [question, setQuestion] = useState(0);
    const [timeout, setTimeout] = useState(10000);
    const [correct, setCorrect] = useState(0);

    const intervalRef = useRef();

    let finish = false;

    if (question === 10) {
        finish = true;
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!question === 10) {
                setQuestion(prev => prev + 1);
            }
        }, 10000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [question]);

    const answerHandler = (event) => {

        if (quizData[question].answer === event?.target.innerText){
            setCorrect(prev => prev + 1);
        }

        setQuestion(prev => prev + 1);
    }

    const restartHandler = () => {
        finish = false;
        setQuestion(0);
        setCorrect(0);
    }

  return (
    <div className="w-fit max-w-11/12 min-w-6/12 mx-auto bg-white text-center p-6 rounded-2xl flex flex-col gap-3">
        { !finish && <Question key={question} questionData={quizData[question]} onAnswer={answerHandler} onTimeout={timeout} /> }
        { finish && <Result score={correct} onRestart={restartHandler} /> }
    </div>
  )
}
