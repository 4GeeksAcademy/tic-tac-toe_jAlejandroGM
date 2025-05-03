import React, { useState } from "react";

const Board = ({ players, currentTurn, setCurrentTurn, board }) => {
    const [squares, setSquares] = useState(board);
    const [winner, setWinner] = useState(null);

    const checkWinner = (board) => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleSquareClick = (index) => {
        if (squares[index] || winner) return;

        const newSquares = [...squares];
        newSquares[index] = currentTurn;
        setSquares(newSquares);

        setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');

        const newWinner = checkWinner(newSquares);
        if (newWinner) {
            setWinner(newWinner);
        }
    };

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setCurrentTurn('X');
    };

    return (
        <>
            <h3 className="indication">
                {winner
                    ? `Winner: ${players[winner === 'X' ? 'player1' : 'player2']}!`
                    : `It's ${players[currentTurn === 'X' ? 'player1' : 'player2']}'s turn`}
            </h3>
            <button className="restart" onClick={handleRestart}>Start over</button>
            <div className="board">
                <div className="board-row">
                    <button
                        className={`square ${squares[0] === 'X' ? 'x' : squares[0] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(0)}
                    >
                        {squares[0]}
                    </button>
                    <button
                        className={`square x-sides ${squares[1] === 'X' ? 'x' : squares[1] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(1)}
                    >
                        {squares[1]}
                    </button>
                    <button
                        className={`square ${squares[2] === 'X' ? 'x' : squares[2] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(2)}
                    >
                        {squares[2]}
                    </button>
                </div>
                <div className="board-row">
                    <button
                        className={`square y-sides ${squares[3] === 'X' ? 'x' : squares[3] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(3)}
                    >
                        {squares[3]}
                    </button>
                    <button
                        className={`square mid ${squares[4] === 'X' ? 'x' : squares[4] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(4)}
                    >
                        {squares[4]}
                    </button>
                    <button
                        className={`square y-sides ${squares[5] === 'X' ? 'x' : squares[5] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(5)}
                    >
                        {squares[5]}
                    </button>
                </div>
                <div className="board-row">
                    <button
                        className={`square ${squares[6] === 'X' ? 'x' : squares[6] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(6)}
                    >
                        {squares[6]}
                    </button>
                    <button
                        className={`square x-sides ${squares[7] === 'X' ? 'x' : squares[7] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(7)}
                    >
                        {squares[7]}
                    </button>
                    <button
                        className={`square ${squares[8] === 'X' ? 'x' : squares[8] === 'O' ? 'o' : ''}`}
                        onClick={() => handleSquareClick(8)}
                    >
                        {squares[8]}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Board;