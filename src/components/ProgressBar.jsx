import React, { useState, useEffect } from 'react'

export const ProgressBar = ({time}) => {

        const [remainTime, setRemainTime] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => { setRemainTime(prev => prev - 10) }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);

  return (
    <progress id='progress' max={time} value={remainTime}/>
  )
}
