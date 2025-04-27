

import React, { useEffect, useState } from 'react';
import { Question } from './Question';

export const Quiz = ({quizData}) => {

    console.log(quizData)

    const [question, setQuestion] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(question);
            setQuestion(prev => prev + 1);
        }, 10000);

        return () => {
            clearInterval(interval);
        }
    }, [question])

  return (
    <div className="w-8/12 mx-auto bg-white text-center p-6 rounded-2xl flex flex-col gap-3">
        <Question questionData={quizData[question]} />
    </div>
  )
}
