import React from "react";
import '../styles/Shop.css'
import Electronics from './Shop/Electronics'
import Games from './Shop/Games'
function Shop(){
    return(
    <div className="shop">
        <h2>Shop</h2>
        <Electronics></Electronics>
       
        <Games></Games>
    </div>
    )
}export default Shop;