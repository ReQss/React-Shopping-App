import React from "react";
import '../styles/Payment.css'
import { Link } from "react-router-dom";
import visa from '../Assets/visa.png'
function Payment() {
    return(
        <div className="Payment">
           <h2 >Payment</h2>
            <hr className="solid" />
            <div className="payment-section">
            <div className="card-info">
                <h2>Card information</h2>
                <p>Indicate details of the card from which money will be debited</p>
                    <div className="payment-card">
                        <div className="card-row-1">
                                <img src={visa}></img>
                        </div>
                        <div className="card-row-2">  
                            <p>Card number</p>
                            <input placeholder="0000 0000 0000 0000"></input>
                           
                        </div>
                     <div className="card-row-3">  
                            
                            <div className="month-year">
                                <p>Month and year</p>
                                <div className="month-year-1">
                                <input placeholder="00" type="text" />
                                <b>/</b><input placeholder="00" type="text" />
                      </div>
                            </div>
                            <div className="cvv">
                                <p>CVV code</p>
                                <input placeholder="000" type="text" />
                               
                      
                            </div>
                             </div>
                
                    </div>
            </div>
                <div className="personal-info">
                         <h2>Personal information</h2>
                    <div className="info-data">
                    <input placeholder="First name"type="text" className="input-short" />
                    <input placeholder="Last name"type="text" className="input-short" />
                    <input placeholder="Country" type="text" className="input-long" />
                    <input placeholder="City" type="text" className="input-short" />
                    <input placeholder="Zip code" type="text" className="input-short" />
                    <input placeholder="E-mail" type="text" className="input-long" />
                    <input placeholder="Phone number" type="text" className="input-long" />
             
                    </div>
                    </div>
            </div>
            
            <a href="/React-Shopping-App/"><div className="newsletter-btn">Pay</div></a>
                    
        </div>
    )
}export default Payment;