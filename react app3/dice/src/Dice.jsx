import React, { useState } from 'react';

const Dice = () => {
    const [numbers, setNumbers] = useState([]);

    const handleDiceClick = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setNumbers([...numbers, randomNumber]);
    };

    const handleDiceRemove = (index) => {
        const newNumbers = [...numbers];
        newNumbers.splice(index, 1);
        setNumbers(newNumbers);
    };

    return (
        <div>
            <button onClick={handleDiceClick}>Zər at</button>
            <div className="dice-container">
                {numbers.map((number, index) => (
                    <div key={index} className="dice" onClick={() => handleDiceRemove(index)}>
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dice;
