import React from "react";
import '../styles/Shop.css'
import Electronics from './Shop/Electronics'
import Games from './Shop/Games'

function Shop(props) {
   
    return(
    <div className="shop" style={{ background:  props.styles.background,color:props.styles.font_color }}>
        <h2>Shop</h2>
        <Electronics styles ={props.styles}  products={props.electronicProducts}  increaseQuantity = {props.increaseElectronicQuantity} />
        <Games   styles ={props.styles}  products={props.gameProducts}  increaseQuantity = {props.increaseGameQuantity}/>
    </div>
    )
}export default Shop;