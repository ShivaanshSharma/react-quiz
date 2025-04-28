import React from 'react'

export const Result = ({score, onRestart}) => {

    let msg = ''
    let cssClass = ''

    if (score >= 9) {
        msg = 'Excellent';
        cssClass = 'text-green-600'
    } else if (score >= 7) {
        msg = 'Good';
        cssClass = 'text-green-300'
    } else if (score >= 5) {
        msg = 'Average';
        cssClass = 'text-yellow-400'
    } else {
        msg = 'Poor';
        cssClass = 'text-red-600'
    }

    const restartHandler = () => {
        onRestart();
    }

  return (
    <div className='flex flex-col gap-6'>
        <span className='font-light text-3xl'>Your Score: {score}/10</span>
        <span className={` text-5xl ${cssClass}`}>{msg}</span>
        <span>
            <button onClick={restartHandler} className='border-1 py-3 px-6 hover:font-bold rounded-xl hover:bg-blue-950 duration-150 hover:text-white cursor-pointer'>Restart Quiz?</button>
        </span>
    </div>
  )
}
