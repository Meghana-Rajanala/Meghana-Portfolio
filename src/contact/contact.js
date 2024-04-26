import './contact.css';
import React from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3alwb8c', 'template_mg96c0k', form.current,'q0-IYolAS9DftIMka')
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Reset form fields after successful submission
          alert('Email sent successfully');
          form.current.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.log(error.text);
          alert('Error sending email');
        }
      );
  };
  return (
    <>
    <h2 id='title_of'>Contact</h2>
        <div className="contact-container">
          
    <img src="img/shape.png" className="square" alt="" />
    <div className="form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
       

        <div className="info">
          <div className="information">
            <i className="fas fa-map-marker-alt"></i> 

            <p>Vijayawada,Andhra Pradesh</p>
          </div>
          <div className="information">
            <i className="fas fa-envelope"></i>
            <p>saivenkatameghana@gmail.com</p>
          </div>
          <div className="information">
            <i className="fas fa-phone"></i>
            <p>7013199309</p>
          </div>
        </div>

        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            
            <a href="https://twitter.com/RajanalaMe92640">
             <img  src="./twitter.png" alt="" height={30}/>
            </a>
            <a href="https://www.instagram.com/rajanala_meghana/">
            <img  src="./instagram.png" alt="" height={30}/>
            </a>
            <a href="https://www.linkedin.com/in/meghanarajanala/">
            <img src='./linkedin.png' alt=''  height={30}/>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form" >
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form  onSubmit={sendEmail} ref={form}>
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="user_name" className="input" placeholder='Name' required/>
            
            
          </div>
          <div className="input-container">
            <input type="email" name="user_email" className="input" placeholder='Email' required/>
           
          </div>
          <div className="input-container">
            <input type="tel" name="user_phone" className="input" placeholder='Phone Number' />
           
           
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" placeholder='Message' required></textarea>
         
            
          </div>
          <input type="submit" value="Send" className="btn" />
        </form>
      </div>
    </div>
  </div>


    </>
  )
};

export default Contact;
