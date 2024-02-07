import React from "react";
import Product from './Product'
function Games(props){
    return(
        <div className="shop-games">
            <div className="section-title">
       
        <h2>Games</h2>
      <hr class="solid"/>
        </div>
            <div className="product-list">
                {props.products.map(record => {
                    return (
                        <Product
                            key={record.id}
                            productName={record.productName}
                            imageSrc={record.imageSrc}
                            price={record.price}
                            quantity={record.quantity}
                            increaseQuantity = {props.increaseQuantity}
                        />
                    )
                })}
        
        </div>
    </div>
    )
}export default Games;