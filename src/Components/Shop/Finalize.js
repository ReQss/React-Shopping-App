import React, { useState } from "react";
import "../../styles/Shop.css";
import { Link } from "react-router-dom";
import Confetti from '../../Assets/confetti.gif'
export default function Finalize(props) {
  
  if(props.modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {props.modal && (
        <div className="finalize">
          <div  className="overlay"></div>
          <div className="finalize-content" style={{ background: props.styles.extras }}>
            <h2>Payment completed successfully</h2>
            <img src={Confetti}></img>
            <p>The parcel will be sent to {props.paymentForm.firstName} {props.paymentForm.lastName}
              <p>Address: {props.paymentForm.street} {props.paymentForm.city} {props.paymentForm.zip}, {props.paymentForm.country}  </p>  

            </p>
            <div className="modal-buttons">         
              <a href="/React-Shopping-App/"><button style={{ background: props.styles.extras,color:props.styles.font_color }} onClick={props.toggleModal}>Continue</button>
            </a>
                      </div> 
          </div>
        </div>
      )}
    </>
  );
}