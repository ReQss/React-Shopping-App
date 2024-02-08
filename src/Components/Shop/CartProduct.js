import React from "react";
import '../../styles/Shop.css';

function CartProduct(props) {
    return(
        <div className='cart-product'>
            <ul className="cart-product-row">
            <li><img src={props.record.imageSrc}></img></li> 
            <li> <p>{props.record.productName}</p></li> 
            <li> <p> {props.record.price}</p></li> 
            <li> <p> {props.record.quantity}</p> </li> 
            </ul>    
        </div>
    )
}export default CartProduct;