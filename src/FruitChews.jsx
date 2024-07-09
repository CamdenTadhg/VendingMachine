import React from 'react';
import {Link} from 'react-router-dom';
import './FruitChews.css'

function FruitChews() {
    return (
        <>
            <img className="Fruit-Chews-img" src="src/images/fruitchews.webp" alt="Fruit Chews" />
            <p><Link to="/">Back to Vending Machine</Link></p>
        </>
    );
}

export default FruitChews;