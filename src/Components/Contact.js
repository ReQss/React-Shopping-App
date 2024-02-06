import React from "react";
function Contact() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        message:""
    })
    console.log(formData)
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    return(
    <div className="contact">
            <h1>Contact us</h1>
            <hr className="solid"/>
            <div className="contactForm">
                <h4>Hours</h4>
                <p>Monday- Friday 10:00am - 7:30pm</p>
                <p>Sunday- Saturday 10:00am - 6pm</p>
                <br />


            <div className="first-row">
                <input
                    placeholder="First name"
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstname}
                />
                <input
                    placeholder="Last name"
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    />
            </div>
            <div className="second-row">
                <input
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea
                    placeholder="Comment"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                />
                
            </div>
             <input value="Send" placeholder="Send" className="submit-input" type="submit"></input>
           </div>
    </div>
    )
}export default Contact;