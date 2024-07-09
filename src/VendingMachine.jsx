import React from "react";
import {Link} from "react-router-dom";
import './VendingMachine.css'


function VendingMachine() {
    return (
        <div className="Vending-Machine">
            <img className="Vending-Machine-img" src='/src/images/vendingmachine.avif' alt="Vending Machine"/>
            <div>
                <p><Link to="/fruitchews">Fruit Chews</Link></p>
                <p><Link to='/caramels'>Caramels</Link></p>
                <p><Link to='/rheabars'>Rhea Bars</Link></p>
            </div>
        </div>

      )
}

export default VendingMachine;