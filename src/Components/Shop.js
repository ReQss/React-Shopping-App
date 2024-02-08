import React from "react";
import '../styles/Shop.css'
import Electronics from './Shop/Electronics'
import Games from './Shop/Games'

import electronics_Data from '../Data/electronics_data.json';
import games_Data from '../Data/games_data.json'
function Shop(props) {
    return(
    <div className="shop">
        <h2>Shop</h2>
        <Electronics products={props.electronicProducts}  increaseQuantity = {props.increaseElectronicQuantity} />
        <Games products={props.gameProducts}  increaseQuantity = {props.increaseGameQuantity}/>
    
    </div>
    )
}export default Shop;