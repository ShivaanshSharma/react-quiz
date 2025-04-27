import React, { useCallback, useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar';

export const Question = ({questionData, onAnswer, onTimeout}) => {

    const optionClickHandler = (e) => {
        onAnswer(e);
    }

    const shuffledArray = [...questionData.options].sort(() => Math.random() - 0.5)

  return (
    <div className='flex flex-col gap-6'>
        <ProgressBar time={onTimeout} />
        <span className='text-xl font-medium'>{questionData.question}</span>
        <span className='gap-3 flex flex-col'>
            {shuffledArray.map((o) => <p onClick={(e) => optionClickHandler(e)} className='border-1 py-3 rounded-xl hover:bg-blue-950 duration-150 hover:text-white cursor-pointer'>
                {o}
            </p>)}
        </span>
    </div>
  )
}
