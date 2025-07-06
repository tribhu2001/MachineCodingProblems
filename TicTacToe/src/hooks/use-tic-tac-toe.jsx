import { useState } from "react"

const useTicTacToe = () =>{
    const [board,setBoard] = useState(Array(9).fill(null));
    const [isXNext,setIsXNext] = useState(true);

    const winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const calculateWinner = (currentBoard)=>{
        for(let i=0;i<winningPatterns.length;i++){
            const [a,b,c] = winningPatterns[i];
            if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c]){
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        const winner = calculateWinner(board);
        if(winner || board[index]){
            return;
        }

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X":"O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const getStatusMessage = () => {
        const realWinner = calculateWinner(board);
        if(realWinner){
            setTimeout(()=>{
                resetGame();
            },2000)
            return `Player ${realWinner} wins!!`;
        }
        if(!board.includes(null)){
            setTimeout(()=>{
                resetGame();
            },2000)
            return "Match Drawn";
        }
        return `Player ${isXNext ? "X" : "O"} turn`;
    };

    return {board, winningPatterns, calculateWinner, handleClick, resetGame, getStatusMessage};
}

export default useTicTacToe;