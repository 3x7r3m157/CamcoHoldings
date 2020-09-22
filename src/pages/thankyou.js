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
          <h4 className="mail-to">Thank you! Your message has been submitted. Please allow up to two weeks for a response. If the inquiry is of utmost importance and we haven't responded yet, Please try to reach out again. It's likely your message was marked as spam or we overlooked your communication.</h4>
        </div>



        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Contact
