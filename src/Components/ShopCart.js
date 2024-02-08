import React from 'react'
import Product from '../Components/Shop/Product'
import '../styles/Shop.css'
function ShopCart(props) {
      return(
    <div className="shop-cart">
              <h2>Shop Cart</h2>
              <h3>Your electronics:</h3>
              {props.electronicProducts.map(record => {
                  if (record.quantity > 0) {
                      return (
                          <div>
                             <p>{record.productName}</p>
                              <img src={record.imageSrc}></img>
                              <p>{record.price}</p>
                              <p>{record.quantity}</p>
                          
                              </div>
                      )
                  }
              })}
              <h3>Your games:</h3>
              {props.gameProducts.map(record => {
                  if (record.quantity > 0) {
                      return (
                          <div>
                              <p>{record.productName}</p>
                              <img src={record.imageSrc}></img>
                              <p>{record.price}</p>
                              <p>{record.quantity}</p>
                          
                              </div>
                      )
                  }
                  
                })}
    </div>
    )
}export default ShopCart;
