import React, { useState } from 'react';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);


    const handleClick = (i: number) => {
        const newBoard = board.slice();
        if (calculateWinner(board) || newBoard[i]) return;
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    const resetBoard = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };

    const renderSquare = (i: number) => {
        return (
            <button className="square" onClick={() => handleClick(i)}>
                {board[i]}
            </button>
        );
    };

    const isBoardFull = board.every((square) => square !== null);

    const winner = calculateWinner(board);
    let status;
    if (winner) {
        status = 'WINNER: ' + winner;
    } else if (isBoardFull) {
        status = 'DRAW: The game is a draw!';
    } else {
        status = 'PLAYER: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="reset-button" onClick={resetBoard}>
                Reset
            </button>
        </div>
    );
}

function calculateWinner(squares: (string | null)[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe;


// import React, { useState } from 'react';

// const TicTacToe = () => {
//     const [board, setBoard] = useState(Array(9).fill(null));
//     const [xIsNext, setXIsNext] = useState(true);

//     const handleClick = (index: number) => {
//         const newBoard = [...board];

//         if (calculateWinner(board) || newBoard[index]) {
//             return;
//         }

//         newBoard[index] = xIsNext ? 'X' : 'O';
//         setBoard(newBoard);
//         setXIsNext(!xIsNext);
//     };

//     const renderSquare = (index: number) => {
//         return (
//             <button className="square" onClick={() => handleClick(index)}>
//                 {board[index]}
//             </button>
//         );
//     };

//     const winner = calculateWinner(board);
//     let status: string;

//     if (winner) {
//         status = 'Winner: ' + winner;
//     } else {
//         status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//     }

//     return (
//         <div>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 {renderSquare(0)}
//                 {renderSquare(1)}
//                 {renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(3)}
//                 {renderSquare(4)}
//                 {renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(6)}
//                 {renderSquare(7)}
//                 {renderSquare(8)}
//             </div>
//         </div>
//     );
// };

// // Fungsi untuk menghitung pemenang
// const calculateWinner = (squares: (string | null)[]): string | null => {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (const [a, b, c] of lines) {
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }

//     return null;
// };

// export default TicTacToe;


// import React, { useState } from 'react';
// import './App.css';

// const Square = (props: { value: string, onClick: () => void }) => (
//     <button className="square" onClick={props.onClick}>
//         {props.value}
//     </button>
// );

// const Board = () => {
//     const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
//     const [xIsNext, setXIsNext] = useState<boolean>(true);

//     const handleClick = (i: number) => {
//         const newSquares = [...squares];
//         if (calculateWinner(newSquares) || newSquares[i]) return;
//         newSquares[i] = xIsNext ? 'X' : 'O';
//         setSquares(newSquares);
//         setXIsNext(!xIsNext);
//     };

//     const renderSquare = (i: number) => (
//         <Square value={squares[i]} onClick={() => handleClick(i)} />
//     );

//     const winner = calculateWinner(squares);
//     let status;
//     if (winner) {
//         status = `Winner: ${winner}`;
//     } else {
//         status = `Next player: ${xIsNext ? 'X' : 'O'}`;
//     }

//     return (
//         <div>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 {renderSquare(0)}
//                 {renderSquare(1)}
//                 {renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(3)}
//                 {renderSquare(4)}
//                 {renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(6)}
//                 {renderSquare(7)}
//                 {renderSquare(8)}
//             </div>
//         </div>
//     );
// };

// const Game = () => (
//     <div className="game">
//         <div className="game-board">
//             <Board />
//         </div>
//     </div>
// );

// const calculateWinner = (squares: string[]): string | null => {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (const line of lines) {
//         const [a, b, c] = line;
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }

//     return null;
// };

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Tic-Tac-Toe</h1>
//             </header>
//             <div className="game-container">
//                 <Game />
//             </div>
//         </div>
//     );
// }

// export default App;
