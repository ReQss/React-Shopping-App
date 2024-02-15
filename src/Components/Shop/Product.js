import React from "react";
import Modal from './Modal'
function Product(props) {
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const addItem = () =>{
        props.increaseQuantity(props.productName);
        toggleModal();
    }
    return(
    <div className="shopping-card">
        <div className="card">
        <Modal
                    toggleModal={toggleModal}
                    modal={modal}
                    productName={props.productName}
                    imageSrc={props.imageSrc }        
        />
        <img src={props.imageSrc}></img>
        <div className="card-details">
        <h3 className="card-title">{props.productName}</h3>
        </div>
        <div className="price">
        <p>Price: {props.price}$</p>
        </div>
        <button onClick={addItem}>Buy</button>
        </div>
    </div>
    )
}export default Product;