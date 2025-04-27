


function StartScreen ({onStatus}) {

    const startHandler = () => {
        onStatus();
    }

    return (
        <div className="w-8/12 mx-auto bg-white text-center p-6 rounded-2xl flex flex-col gap-3">
            <span className="font-bold text-3xl">React Quiz!</span>
            <p className="text-left font-light">
                <b>Quiz Rules:</b> <br />
                1. Each question has only one correct answer.<br />
                2. No going back to previous questions after submitting an answer.<br />
                3. One point is awarded for each correct answer.<br />
                4. No negative marking for wrong answers.<br />
                5. You will have 10 seconds to answer each question. If failed to choose any option within the 10 seconds, that question will be skiped.
                6. The final score will be displayed at the end of the quiz.
            </p>
            <span>
                <button onClick={startHandler} className="border-1 py-3 px-6 hover:font-bold rounded-xl hover:bg-blue-950 duration-150 hover:text-white cursor-pointer">Start Quiz</button>
            </span>
        </div>
    )
}

export default StartScreen;