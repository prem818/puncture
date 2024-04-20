import React from "react";
import "../contact.css"
import emailjs from "emailjs-com";

const Contact = () => {

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6rmkhqd', 'template_91mavqp', e.target, 'MW1Tpxe8iNxclhSx6')
            .then((result) => {
                console.log(result.text);
                alert("Thank you for Contact us ...")
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    }

    return (
        <div className="Csection">
            <div className="Contact-content">
                <div className="Cimage">
                    <img src="./images/contact.jpg" width="400"></img>
                </div>
                <div className="C-content">
                    <form onSubmit={SendEmail}>
                        <input type="text" className="Cinput" placeholder="Name" name="name"></input><br></br>
                        <input type="email" className="Cinput" placeholder="Email" name="email"></input>
                        <textarea className="Cteaxarea" placeholder="Your Message .." name="message"></textarea><br></br>
                        <input className="Cbutton" type="submit" value="Send"></input>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;