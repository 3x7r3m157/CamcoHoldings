import React from 'react';
import Navbar from '../components/camconavbar.js';
import NavParticles from '../components/navparticles.js';
import Footer from '../components/footer.js';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import './contact.scss';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg">
        <div className="mail-to-container">
          <h5>For all feedback and inquiries, please reach out using the form provided below.</h5>
          <div className="contact-form">
            <form name="Contact Form" method="POST" data-netlify="true" action="/thankyou">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>First and Last Name: </label>
                <input type="text" name="fname" />
              </div>
              <div>
                <label>Phone number: </label>
                <input type="tel" name="phone" />
              </div>
              <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <br/>
        <Footer />
        <motion.div className="background-container">
          <motion.div className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}></motion.div>
        </motion.div>
        </div>
      <motion.img className="nav-background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Contact
