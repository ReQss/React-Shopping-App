import React from "react";
import Product from './Product'

function Electronics(){
    return(
    <div className="shop-electronics">
       <div className="section-title">
                <h2>Electronics</h2>
                  <hr class="solid"/>
        </div>
        <div className="product-list">
        <Product
        productName="Playstation 3"
        imageSrc="playstation.png"
        price="1300"
        ></Product>
        <Product
        productName="Xbox One"
        imageSrc="xbox.png"
        price="900"
        ></Product>
        <Product
        productName="Nintendo Switch 32GB"
        imageSrc="nintendo.png"
        price="700"
        ></Product>
        <Product
        productName="Playstation 4"
        imageSrc="playstation.png"
        price="900"
        ></Product>
        <Product
        productName="Nintendo Switch 32GB"
        imageSrc="nintendo.png"
        price="700"
        ></Product>
        </div>
    </div>
    )
}export default Electronics;