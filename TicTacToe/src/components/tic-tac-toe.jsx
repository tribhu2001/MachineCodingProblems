import { useState } from "react"
import '../App.css'
import useTicTacToe from "../hooks/use-tic-tac-toe"

function TicTacToe() {
  
  const {board, calculateWinner, handleClick, resetGame, getStatusMessage} = useTicTacToe();
  return (
    <div className='game'> 
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>Reset</button>
      </div>
      <div className="board">
        {board.map((b,index)=>{
          return(
            <button className="box" key={index} 
            onClick={()=>handleClick(index)}
            disabled={b!==null}>{b}</button>
          )
        })}
      </div>
    </div>
  )
}

export default TicTacToe;
