import React from 'react';
import { Link } from 'gatsby';
import Particles from './particles.js'
import '../pages/styles.scss';
import Facebook from '../../static/facebook.svg';
import Linkedin from '../../static/linkedin.svg';
import Instagram from '../../static/instagram.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="follow-us">
          <div className="social-icon">
            <Link to="https://www.facebook.com/CamCoCommercialinc"><motion.img src={Facebook} key={Facebook} /></Link>
          </div>
          <div className="social-icon">
            <Link to="https://www.linkedin.com/company/camco-commercial-inc/"><motion.img src={Linkedin} key={Linkedin} /></Link>
          </div>
          <div className="social-icon">
            <Link to="https://www.instagram.com/camcocommercial_inc/"><motion.img src={Instagram} key={Instagram} /></Link>
          </div>
        </div>
        <div className="term-privacy">
        <Particles />
        <Link to="/terms/">Terms<span className="dot">    &#183;    </span></Link>
        <Link to="/privacy/">Privacy</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
