import React from 'react'
import CartProduct from '../Components/Shop/CartProduct'
import '../styles/Shop.css'
import  { useState, useEffect } from 'react';
function ShopCart(props) {
    
    const [CartProducts, setCartProducts] = React.useState([]);
        useEffect(() => {
        const updatedCartProducts = [...props.electronicProducts, ...props.gameProducts].filter(record => record.quantity > 0);
        setCartProducts(updatedCartProducts);
        }, [props.electronicProducts, props.gameProducts]);
    
    
      return(
      <div className="shop-cart">
            <h2>Shop Cart</h2>
            <h3>Your electronics:</h3>
            {CartProducts.map(record => (
                <CartProduct key={record.id} record={record} />
            ))}
        </div>
    )
}export default ShopCart;
