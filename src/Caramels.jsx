import React from 'react';
import {Link} from 'react-router-dom';
import './Caramels.css';

function Caramels() {
    return (
        <>
            <img className="Caramels-img" src="src/images/caramels.webp" alt="Caramels" />
            <p><Link to="/" >Back to Vending Machine</Link></p>
        </>
    );
}

export default Caramels;