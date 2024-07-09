import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import FruitChews from './FruitChews';
import Caramels from './Caramels';
import RheaBars from './RheaBars';
import Home from './Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/fruitchews" element={<FruitChews />}/>
          <Route path="/caramels" element={<Caramels />}/>
          <Route path="/rheabars" element={<RheaBars />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
