import React, { useState } from 'react';
import './ScoreKeeper.css';
import { Card, Button, Box, ButtonGroup } from 'react-bulma-components';
import { useLoaderData } from 'react-router-dom';

const ScoreKeeper = () => {

  // if state is declared using const, wil throw 'Assignment to constant variable' error
  let [ p1Score, setP1Score ] = useState(0);
  let [ p2Score, setP2Score ] = useState(0);
  let [ isGameOver, setIsGameOver ] = useState(false);
  let [ winningScore, setWinningScore ] = useState(null);
  let [ p1WinStatus, setP1WinStatus ] = useState({ color: "black" });
  let [ p2WinStatus, setP2WinStatus ] = useState({ color: "black" });

  // const normalStyle = { color: "black" };
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
        setP1WinStatus(true);
        setP2WinStatus(false);
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
        setP2WinStatus(true);
        setP1WinStatus(false);
        setIsGameOver(true);
      }
    }
  }

  const resetHandler = (e) => {
    setIsGameOver(false);
    setP1WinStatus();
    setP2WinStatus();
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
      <Card style={{ width: 300, margin: 'auto'}}>
        <Card.Image 
          size='4by3'
          src='https://picsum.photos/300'
        />

        <Card.Content>
          {/* score > 70 ? 'Excellent' : score > 50 ? 'Average' : score > 40 ? 'Fair' : 'Do better' */}
          {/* <h1><span id='p1Score'>{p1Score}</span> to <span id='p2Score'>{p2Score}</span></h1> */}
          <h1><span id='p1Score' style={ p1WinStatus ? winnerStyle : loserStyle }>{p1Score}</span> to <span id='p2Score' style={ p2WinStatus ? winnerStyle : loserStyle }>{p2Score}</span></h1>
          
          <select name='' id='playto' onChange={winningScoreSelect}>
            <option value='choose'>Play To ...</option>
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
          
          <Button id='p1Button' size='large' color="" renderAs='span' onClick={p1Handler}>+1 Player One</Button>
          <Button id='p2Button' size='large' color="success" renderAs='span' onClick={p2Handler}>+1 Player Two</Button>
          <Button id='reset' size='large' color="danger" renderAs='span' onClick={resetHandler}>Reset</Button>
        </Card.Content>
      </Card>
    </>
  )
}

export default ScoreKeeper