import React from "react";
import Product from './Product'
function Games(props) {
     function filterProducts(products, searchText) {
        if (searchText === "") {
            return products;
        } else {
            return products.filter(product =>
                product.productName.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    }

    const filteredProducts = filterProducts(props.products, props.searchText);

    return(
        <div className="shop-games">
            <div className="section-title">
       
        <h2>Games</h2>
      <hr className="solid"/>
        </div>
            <div className="product-list">
                 {filteredProducts.map(record => (
                    <Product
                        styles={props.styles}
                        shopNotification={props.shopNotification}
                        key={record.id}
                        productName={record.productName}
                        imageSrc={record.imageSrc}
                        price={record.price}
                        quantity={record.quantity}
                        increaseQuantity={props.increaseQuantity}
                    />
                ))}
        
        </div>
    </div>
    )
}export default Games;