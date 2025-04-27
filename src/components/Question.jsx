import React, { useEffect, useState } from 'react'

export const Question = ({questionData}) => {

    const [remainTime, setRemainTime] = useState(10000);

    if (remainTime <= 0) {
        setRemainTime(10000);
    }

    useEffect(() => {
        const interval = setInterval(() => { setRemainTime(prev => prev - 10) }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [])

  return (
    <div className='flex flex-col gap-6'>
        <progress id='progress' max={10000} value={remainTime}/>
        <span className='text-xl font-medium'>{questionData?.question}</span>
        <span className='gap-3 flex flex-col'>
            {questionData?.options.map((o) => <p className='border-1 py-3 rounded-xl hover:bg-blue-950 duration-150 hover:text-white cursor-pointer'>
                {o}
            </p>)}
        </span>
    </div>
  )
}
