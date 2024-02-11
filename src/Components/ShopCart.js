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
    
    // 
      return(
      <div className="shop-cart">
            <h2>Shop Cart</h2>
              
              {CartProducts.length > 0 ?
                  <div>
                      
                  <table >
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                      {CartProducts.map(record => (
                          <tr>
                              <td><img src={record.imageSrc}></img></td>
                              <td>{record.productName}</td>
                              <td>{record.price}</td>
                              <td className='quantity'>
                                   <button onClick={props.increase} className='product-quantity-btn'>-</button>
                             
                                 {record.quantity}
                                  
                                  <button className='product-quantity-btn'>+</button>
                              </td>
                             
                          </tr>))}
                      <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                          <td><button className='table-button'>Send</button></td>
                      </tr>
                      </table>
                      </div>
                :<h1>Your list is empty.</h1>}
        </div>
    )
}export default ShopCart;
