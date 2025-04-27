import React from 'react'

export const Result = ({score}) => {

    let msg = ''

    if (score >= 9) {
        msg = 'Excellent';
    } else if (score >= 7) {
        msg = 'Good';
    } else if (score >= 5) {
        msg = 'Average';
    } else {
        msg = 'Poor';
    }

  return (
    <div className='flex flex-col gap-3'>
    <span className='font-light text-3xl'>Your Score:</span>
    <span className='font-bold text-4xl'>{score}/10</span>
    <span className='font-light text-6xl'>{msg}</span>
    </div>
  )
}
