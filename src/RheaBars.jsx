import React from 'react';
import {Link} from 'react-router-dom';
import './RheaBars.css'

function RheaBars() {
    return (
        <>
            <img className="Rhea-Bars-img" src="src/images/rheabars.webp" alt="Rhea Bars" />
            <p><Link to="/">Back to Vending Machine</Link></p>
        </>
    );
}

export default RheaBars;