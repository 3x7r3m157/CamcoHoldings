import React from 'react';
import Navbar from '../components/camconavbar.js';
import NavParticles from '../components/navparticles.js';
import Footer from '../components/footer.js';
import BackgroundImage from '../../static/untitled-1.jpg';
import BackgroundImage2 from '../../static/untitled-2.jpg';
import './styles.scss';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg">
        <div className="mail-to-container">
          <h4 className="mail-to">For all feedback and inquiries, Reach out to us at <a href="mailto:pr@riseaboveep.com">pr@riseaboveep.com</a>. Please allow up to two weeks for a response. If the inquiry is of utmost importance and we haven't responded yet, Please try to reach out again. It's likely your message was marked as spam or we overlooked your communication.</h4>
        </div>
        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} animate={{ x:2000 }} transition={{ ease: 0, duration: 140 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} animate={{ x:4000 }} transition={{ ease: 0, duration: 100 }}/>
    </div>
  )
}

export default Contact
