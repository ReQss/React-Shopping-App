import React from "react";
import Product from './Product'

import electronics_Data from '../../Data/electronics_data.json';
function Electronics(props) {

    return(
        <div className="shop-electronics">
       <div className="section-title">
                <h2>Electronics</h2>
                  <hr className="solid"/>
        </div>
            <div className="product-list">
                  {props.products.map(record => {
                    return (
                        <Product
                            shopNotification={props.shopNotification}
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
}export default Electronics;