import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Navbar.css'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Register from './Components/Register'
import Shop from './Components/Shop'
import ShopCart from './Components/ShopCart'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopcart" element={<ShopCart />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
