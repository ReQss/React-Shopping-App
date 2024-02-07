import React from "react";
import '../styles/Shop.css'
import Electronics from './Shop/Electronics'
import Games from './Shop/Games'

import electronics_Data from '../Data/electronics_data.json';
import games_Data from '../Data/games_data.json'
function Shop() {
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
    function displayProducts() {
        const electronicProductsWithQuantity = electronicProducts.filter(product => product.quantity > 0);
        const gameProductsWithQuantity = gameProducts.filter(product => product.quantity > 0);
        console.log("Electronic Products with Quantity > 0:");
        console.log(electronicProductsWithQuantity);

        console.log("Game Products with Quantity > 0:");
        console.log(gameProductsWithQuantity);
    }
    displayProducts()
    return(
    <div className="shop">
        <h2>Shop</h2>
        <Electronics products={electronicProducts}  increaseQuantity = {increaseElectronicQuantity} ></Electronics>
        <Games products={gameProducts}  increaseQuantity = {increaseGameQuantity}></Games>
    
    </div>
    )
}export default Shop;