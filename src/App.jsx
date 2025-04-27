import { useState } from 'react';
import StartScreen from './components/StartScreen.jsx';
import quiz from './helpers/quizData';
import { Quiz } from './components/Quiz.jsx';

function App() {

  const [status, setStatus] = useState(false);

  const statusChangeHandler = () => {
    setStatus(prev => !prev);
  }

  return (
    <div className='flex flex-col h-screen justify-center'>
      { status ? <Quiz quizData={quiz} /> : <StartScreen onStatus={statusChangeHandler} /> }
    </div>
  )
}

export default App
