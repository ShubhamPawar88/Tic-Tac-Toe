import React, { useState } from 'react'
import './App.css'
import logo from './Images/tic-tac-toe logo.png'
import Player from './Components/Player';
import Game_Board from './Components/Game_Board'; 

function App() {
  let[player1,setPlayer1]=useState("player1");
  let[player2,setPlayer2]=useState("player2");
  return (
    <div>
         <h1 className='Game-Heading'>Tic Tac Toe Game</h1>
         <div className='img-container'>
            <img src={logo} height="80px" width="80px"/>

         </div>

         <div className='Main-section'>
            <div className='Game-container'>
                <div className='player-section'>
                       <Player name="Player1" symbol="X" setPlayer={setPlayer1}/>
                       <Player name="Player2" symbol="O" setPlayer={setPlayer2}/>
                </div>
                <div className='game-section'>
                  <Game_Board  player1={player1} player2={player2}/>
                </div>
                       
            </div>

         </div>
    </div>
  );
}

export default App