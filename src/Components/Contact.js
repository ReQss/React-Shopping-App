import React from "react";
import Alert from 'react'
import '../styles/Contact.css'
function Contact(props) {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        message:""
    })
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
         setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });
    }
   
    return(
    <div className="contact" style={{ background:  props.styles.background,color :props.styles.font_color  }}>
            <h2>Contact us</h2>
            <hr className="solid" />
            <form className="contactForm" onSubmit={handleSubmit}>
          
                <h4>Hours</h4>
                <p>Monday- Friday 10:00am - 7:30pm</p>
                <p>Sunday- Saturday 10:00am - 6pm</p>
                <br />


            <div className="first-row">
                    <input
                    style={{background:props.styles.mode? props.styles.extras:""}}
                    placeholder="First name"
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                    <input
                      style={{background:props.styles.mode? props.styles.extras:""}}
                    placeholder="Last name"
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    />
            </div>
            <div className="second-row">
                    <input
                          style={{background:props.styles.mode? props.styles.extras:""}}
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                    <textarea
                          style={{background:props.styles.mode? props.styles.extras:""}}
                    placeholder="Comment"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                />
                
            </div>
             <input  value="Send" placeholder="Send" className="submit-input" type="submit"></input>
           </form>
    </div>
    )
}export default Contact;