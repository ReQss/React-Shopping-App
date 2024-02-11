import React from "react";

function Product(props) {
   
    return(
    <div className="shopping-card">
        <div className="card">
      
        <img src={props.imageSrc}></img>
        
        <div className="card-details">
        <h3 className="card-title">{props.productName}</h3>
        </div>
        <div className="price">
        <p>Price: {props.price}$</p>
        </div>
        <button onClick={() => props.increaseQuantity(props.productName)}>Buy</button>
        </div>
    </div>
    )
}export default Product;