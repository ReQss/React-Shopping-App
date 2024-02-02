import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Register from './Components/Register'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
