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
import About from './Components/About'
import ShopCart from './Components/ShopCart'
import Payment from './Components/Payment';
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
  //displayProducts()
  let totalQuantity = calculateTotalQuantity(electronicProducts) + calculateTotalQuantity(gameProducts);
  const [darkMode, setDarkMode] = React.useState({
    mode: false,
    nav_color: "white",
    font_color: "black",
    background: 'linear-gradient(180deg, #cbc9ff, #e1ffea22 60%)',
    extras:"white"
  })
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => ({
      ...prevDarkMode,
      mode: !prevDarkMode.mode,
      nav_color: prevDarkMode.mode ? "white" : "#242424",
      font_color: prevDarkMode.mode ? "black" : "white",
      background: prevDarkMode.mode ? "linear-gradient(180deg, #cbc9ff, #e1ffea22 60%)" : "linear-gradient(180deg, #01061a, #242424 60%)",
      extras: prevDarkMode.mode ? "white" : "#242424"
    }))
  };

  return (
    <Router>
      <div className="App">
        <Navbar totalQuantity={totalQuantity} toggleDarkMode = {toggleDarkMode} styles={darkMode} />
       
        <Routes>
          <Route path="/React-Shopping-App/" element={<Home styles = {darkMode} />} />
          <Route path="/" element={<Home styles = {darkMode}/>} />
          <Route path="/React-Shopping-App/contact" element={<Contact styles = {darkMode}  />} />
          <Route path="/React-Shopping-App/shop" element={<Shop styles = {darkMode} electronicProducts={electronicProducts} gameProducts={gameProducts} increaseElectronicQuantity={increaseElectronicQuantity} increaseGameQuantity={increaseGameQuantity} />} />
          <Route path="/React-Shopping-App/login" element={<Login styles = {darkMode} />}/>
          <Route path="/React-Shopping-App/register" element={<Register styles = {darkMode} />} />
          <Route path="/React-Shopping-App/shopcart" element={<ShopCart styles = {darkMode}  electronicProducts={electronicProducts} gameProducts={gameProducts} increaseElectronicQuantity={increaseElectronicQuantity} increaseGameQuantity={increaseGameQuantity} decreaseElectronicQuantity={decreaseElectronicQuantity} decreaseGameQuantity={decreaseGameQuantity} />} />
          <Route path="/React-Shopping-App/about" element={<About styles = {darkMode}/>} />
          <Route path="/React-Shopping-App/payment" element={<Payment styles = {darkMode}/>} />

        </Routes>
          
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
