import React, { useState } from 'react';
import './ScoreKeeper.css';

const ScoreKeeper = () => {

  // if state is declared using const, wil throw 'Assignment to constant variable' error
  let [ p1Score, setP1Score ] = useState(0);
  let [ p2Score, setP2Score ] = useState(0);
  let [ isGameOver, setIsGameOver ] = useState(false);

  // hardcode the winning score
  let winningScore = 5;
  

  // still playing game?
  // whenever anyone hits the winning score, change to true

  const p1Handler = (e) => {
    // if game is not over, increment score
    if (!isGameOver) {
      console.log('p1 button clicked!');
      setP1Score(p1Score++);
      // if score is winning score, game over
      if (p1Score === winningScore) {
        setIsGameOver(true);
      }
    }
  }

  const p2Handler = (e) => {
    // if game is not over, increment score
    if (!isGameOver) {
      console.log('p2 button clicked!')
      setP2Score(p2Score++);
      // if score is winning score, game over
      if (p2Score === winningScore) {
        setIsGameOver(true);
      }
    }
  }

  const resetHandler = () => {
    alert('reset clicked!')
  }


  return (
    <>
      <h1><span id='p1Score'>{p1Score}</span> to <span id='p2Score'>{p2Score}</span></h1>
      <button id='p1Button' onClick={p1Handler}>+1 Player One</button>
      <button id='p2Button' onClick={p2Handler}>+1 Player Two</button>
      <button id='reset' onClick={resetHandler}>Reset</button>    
    </>
  )
}

export default ScoreKeeper