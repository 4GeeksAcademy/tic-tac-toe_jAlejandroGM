import React, { useState } from "react";

const StartMenu = ({ onWeaponSelect }) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const handleWeaponSelect = (weapon) => {
        if (!player1 || !player2) {
            alert('Please enter both player names');
            return;
        }
        onWeaponSelect(weapon, player1, player2);
    };

    return (
        <div className="menu">
            <h5>{'>'}CHOOSE YOUR WEAPON{'<'}</h5>
            <div className="player1">
                <input type="text" placeholder="Player 1 username" value={player1}
                    onChange={(e) => setPlayer1(e.target.value)} />
                <button className="x" type="submit" onClick={() => handleWeaponSelect('X')}>X</button>
            </div>
            <div className="player2">
                <input type="text" placeholder="Player 2 username" value={player2}
                    onChange={(e) => setPlayer2(e.target.value)} />
                <button className="o" type="submit" onClick={() => handleWeaponSelect('O')}>O</button>
            </div>
        </div>
    )
}

export default StartMenu;