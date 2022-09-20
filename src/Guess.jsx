import React from 'react';
import { useState } from 'react';
import './guess.css';


const Guess = () => {
    const [score, setScore] = useState(0)
    const [guess, setGuess] = useState('')

    const change = () =>{
            const randomNumber = Math.floor(Math.random() * 10)+1;
            if( Number(guess) === randomNumber){
                setScore(()=>score+1)
            }
    }
    const reset = () =>{
        setScore(0)
    }

  return (
    <div className='guess'>
      <div className="center">
        <h1>Guess the number between 1 to 10?</h1>
        <input
        value={guess}
        type = "number"
        min="1"
        max="10"
        onChange = { (e) => setGuess(e.target.value)} />
        <button className='newBtn' onClick={change}>Guess</button> 
        <p>Your score: {score}</p>      
        <button className='newBtn' id='new' onClick={reset}>Reset</button>
        
      </div>
    </div>
  )
}

export default Guess
