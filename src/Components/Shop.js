import React from "react";
import '../styles/Shop.css'
import Electronics from './Shop/Electronics'
import Games from './Shop/Games'

function Shop(props) {
    const [searchText, setSearchText] = React.useState("");
    function handleChange(event) {
        setSearchText(event.target.value)        
    }
    return(
    <div className="shop" style={{ background:  props.styles.background,color:props.styles.font_color }}>
            <h2>Shop</h2>
            <input className="shop--searchbar" type="text" value={searchText} onChange={handleChange} placeholder="Search"></input>
        <Electronics styles ={props.styles}  products={props.electronicProducts}  increaseQuantity = {props.increaseElectronicQuantity} searchText={searchText} />
            <Games styles={props.styles} products={props.gameProducts} increaseQuantity={props.increaseGameQuantity} searchText={searchText} />
    </div>
    )
}export default Shop;