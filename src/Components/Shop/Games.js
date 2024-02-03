import React from "react";
import Product from './Product'
function Games(){
    return(
    <div className="shop-games">
        <div className="section-title">
        <h2>Games</h2>
      
        </div>
       
        <div className="product-list">
        <Product
        productName="The Legend Of Zelda: Breath Of The Wild"
        imageSrc="zelda.jpg"
        price="30"
        ></Product>
        <Product
        productName="Nintendo New Super Mario Bros U Deluxe "
        imageSrc="mario.jpg"
        price="30"
        ></Product>
        <Product
        productName="Persona 5 Royal PS5"
        imageSrc="persona.jpg"
        price="30"
        ></Product>
        </div>
    </div>
    )
}export default Games;