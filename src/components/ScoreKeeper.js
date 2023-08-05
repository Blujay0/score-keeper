import React, { useState } from 'react';
import './ScoreKeeper.css';
import { useLoaderData } from 'react-router-dom';

const ScoreKeeper = () => {

  // if state is declared using const, wil throw 'Assignment to constant variable' error
  let [ p1Score, setP1Score ] = useState(0);
  let [ p2Score, setP2Score ] = useState(0);
  let [ isGameOver, setIsGameOver ] = useState(false);
  let [ winningScore, setWinningScore ] = useState(null);
  // let [ p1WinStatus, setP1WinStatus ] = useState(false);
  // let [ p2WinStatus, setP2WinStatus ] = useState(false);

  const winnerStyle = { color: "green" };
  const loserStyle = { color: "red" };

  // hardcode the winning score
  // let winningScore = 5;
  
  const p1Handler = (e) => {
    // if game is not over, increment score
    if (!isGameOver) {
      // console.log('p1 button clicked!');
      setP1Score(++p1Score);
      // if score is winning score, game over
      if (p1Score === winningScore) {
        // alert('Player 1 wins!');
        // setP1WinStatus(true);
        setIsGameOver(true);
      }
    }
  }

  const p2Handler = (e) => {
    // if game is not over, increment score
    if (!isGameOver) {
      // console.log('p2 button clicked!')
      setP2Score(++p2Score);
      // if score is winning score, game over
      if (p2Score === winningScore) {
        // alert('Player 2 wins!');
        // setP2WinStatus(true);
        setIsGameOver(true);
      }
    }
  }

  const resetHandler = (e) => {
    setIsGameOver(false);
    // setP1WinStatus(false);
    // setP2WinStatus(false);
    setP1Score(0);
    setP2Score(0);
  }

  const winningScoreSelect = (e) => {
    // alert(e.target.value); // returns the value of <select>
    // alert(typeof(e.target.value)); // returns the type of value of <select>

    // e.target.value holds the value of the <select>
    // use parseInt b/c e.target.value is a string

    setWinningScore(parseInt(e.target.value));
    resetHandler();
  }

  return (
    <>
      {/* <h1><span id='p1Score' style={ p1WinStatus ? winnerStyle : loserStyle }>{p1Score}</span> to <span id='p2Score' style={{p2WinStatus} ? { winnerStyle } : { loserStyle }}>{p2Score}</span></h1> */}
      <h1><span id='p1Score'>{p1Score}</span> to <span id='p2Score'>{p2Score}</span></h1>
      
      <select name='' id='playto' onChange={winningScoreSelect}>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
      </select>

      <button id='p1Button' onClick={p1Handler}>+1 Player One</button>
      <button id='p2Button' onClick={p2Handler}>+1 Player Two</button>
      <button id='reset' onClick={resetHandler}>Reset</button>  
    </>
  )
}

export default ScoreKeeper