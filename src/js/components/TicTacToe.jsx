import React, { useState } from "react";
import Board from "./Board"
import StartMenu from "./StartMenu";

const TicTacToe = () => {
	const [gameStarted, setGameStarted] = useState(false);
	const [selectedWeapon, setSelectedWeapon] = useState(null);
	const [players, setPlayers] = useState({
		player1: '',
		player2: ''
	});
	const [board] = useState(Array(9).fill(null));
	const [currentTurn, setCurrentTurn] = useState('X');

	const handleWeaponSelect = (weapon, player1Name, player2Name) => {
		setSelectedWeapon(weapon);
		setPlayers({
			player1: player1Name,
			player2: player2Name
		});
		setCurrentTurn(weapon);
		setGameStarted(true);
	};

	return (
		<>
			<h1 className="title">Tic Tac Toe in React.js</h1>
			<div className="container">
				{!gameStarted ? (
					<StartMenu onWeaponSelect={handleWeaponSelect} />
				) : (
					<Board initialWeapon={selectedWeapon}
						players={players}
						currentTurn={currentTurn}
						setCurrentTurn={setCurrentTurn}
						board={board} />
				)}
			</div>
		</>
	);
};

export default TicTacToe;