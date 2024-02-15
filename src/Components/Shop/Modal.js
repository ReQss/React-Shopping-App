import React, { useState } from "react";
import "../../styles/Shop.css";
import { Link } from "react-router-dom";

export default function Modal(props) {
  
  if(props.modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {props.modal && (
        <div className="modal">
          <div onClick={props.toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{props.productName} successfully added to the cart.</h2>
             <img src={props.imageSrc}></img>
            <div className="modal-buttons">         
            <Link to="/React-Shopping-App/shop"><button onClick={props.toggleModal}>Back</button></Link>
            <Link to="/React-Shopping-App/ShopCart"><button onClick={props.toggleModal}>Continue</button>
            </Link>
                      </div> 
          </div>
        </div>
      )}
    </>
  );
}