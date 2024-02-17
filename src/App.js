import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Navbar.css'
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from './Components/Home';
import Contact from './Components/Contact'
import Register from './Components/Register'
import Shop from './Components/Shop'
import ShopCart from './Components/ShopCart'
import Image from './mario.jpg'
import electronics_Data from './Data/electronics_data.json';
import games_Data from './Data/games_data.json'
import Login from './Components/Login'
function App() {
  const initialElectronicProductsState = electronics_Data.map(record => ({
        ...record,
        quantity: 0 
    }));
    const [electronicProducts, setElectronicProducts] = React.useState(initialElectronicProductsState);
    const increaseElectronicQuantity = productName => {
        setElectronicProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.productName === productName) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
        });
    };
    
    const initGameProductsState = games_Data.map(record => ({
        ...record,
        quantity:0
    }))
    const [gameProducts, setGameProducts] = React.useState(initGameProductsState);
    const increaseGameQuantity = productName => {
        setGameProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.productName === productName) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
        });
  };
  const decreaseGameQuantity = productName => {
        setGameProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.productName === productName && product.quantity > 0) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
        });
  };
  const decreaseElectronicQuantity = productName => {
        setElectronicProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.productName === productName) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
        });
    };
  const calculateTotalQuantity = (products) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
      total += products[i].quantity;
    }
    return total;
  } 
  function displayProducts() {
        const electronicProductsWithQuantity =electronicProducts.filter(product => product.quantity > 0);
        const gameProductsWithQuantity = gameProducts.filter(product => product.quantity > 0);
        console.log("Electronic Products with Quantity > 0:");
        console.log(electronicProductsWithQuantity);
        console.log("Game Products with Quantity > 0:");
        console.log(gameProductsWithQuantity);
    }
  displayProducts()
  let totalQuantity = calculateTotalQuantity(electronicProducts) + calculateTotalQuantity(gameProducts);
  return (
    <Router>
      <div className="App">
        <Navbar totalQuantity={totalQuantity} />
        <Routes>
          <Route path="/React-Shopping-App/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/React-Shopping-App/contact" element={<Contact />} />
          <Route path="/React-Shopping-App/shop" element={<Shop electronicProducts={electronicProducts} gameProducts={gameProducts} increaseElectronicQuantity={increaseElectronicQuantity} increaseGameQuantity={increaseGameQuantity} />} />
          <Route path="/React-Shopping-App/login" element={<Login/>}/>
          <Route path="/React-Shopping-App/register" element={<Register />} />
          <Route path="/React-Shopping-App/shopcart" element={<ShopCart electronicProducts={electronicProducts} gameProducts={gameProducts} increaseElectronicQuantity={increaseElectronicQuantity} increaseGameQuantity={increaseGameQuantity} decreaseElectronicQuantity={decreaseElectronicQuantity} decreaseGameQuantity={decreaseGameQuantity} />} />
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
