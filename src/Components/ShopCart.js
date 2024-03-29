import React from 'react'
import CartProduct from '../Components/Shop/CartProduct'
import '../styles/Shop.css'
import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
function ShopCart(props) {
    
    const [CartProducts, setCartProducts] = React.useState([]);
        useEffect(() => {
        const updatedCartProducts = [...props.electronicProducts, ...props.gameProducts].filter(record => record.quantity > 0);
        setCartProducts(updatedCartProducts);
        }, [props.electronicProducts, props.gameProducts]);
    
    // 
      return(
      <div className="shop-cart" style={{ background:  props.styles.background,color :props.styles.font_color  }}>
            <h2>Shop Cart</h2>
              
              {CartProducts.length > 0 ?
                  <div>
                      
              <table style={{ background: props.styles.extras }}  >
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                      {props.electronicProducts.filter(record => record.quantity >0).map( record => (
                          <tr>
                              <td><img src={record.imageSrc}></img></td>
                              <td>{record.productName}</td>
                              <td>{record.price}</td>
                              <td className='quantity'>
                                   <button onClick={() => props.decreaseElectronicQuantity(record.productName)} className='product-quantity-btn'>-</button>

                                 {record.quantity}
                                  
                                  <button onClick={() => props.increaseElectronicQuantity(record.productName)} className='product-quantity-btn'>+</button>
                              </td>
                             
                        </tr>))}
                        {props.gameProducts.filter(record => record.quantity >0).map( record => (
                                  <tr>
                                      <td><img src={record.imageSrc}></img></td>
                                      <td>{record.productName}</td>
                                      <td>{record.price}</td>
                                      <td className='quantity'>
                                          <button  onClick={() => props.decreaseGameQuantity(record.productName)} className='product-quantity-btn'>-</button>
                                    
                                        {record.quantity}
                                          
                                          <button onClick={() => props.increaseGameQuantity(record.productName)} className='product-quantity-btn' >+</button>
                                      </td>
                                    
                                  </tr>))}
                      <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                          <td><Link to="/React-Shopping-App/payment"><button className='table-button'>Purchase</button></Link></td>
                       
                </tr>
                      </table>
                      </div>
                :<h1>Your list is empty.</h1>}
        </div>
    )
}export default ShopCart;
