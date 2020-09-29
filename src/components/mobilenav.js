import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/styles.scss';
import BackgroundImageX from '../../static/Untitled-1.jpg';
import Particles from '../components/particles.js';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';


const MobileNav = () => {
  return (

    <div className="mobile-container">
        <Particles />
        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}>
          <motion.div>
            <Link className="hamburger" to="/mobile/"><motion.h1 className="cclogo-mobile" initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 2.5}}>CamCo</motion.h1></Link>
          </motion.div>
        </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/about/">ABOUT</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 2}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/companies/">COMPANIES</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 3}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/philanthropy/">PHILANTHROPY</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 4}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/riseabove/">RISE ABOVE</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 5}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/team/">OUR TEAM</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 6}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/press/">PRESS</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 7}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/contact/">CONTACT</Link>
            </motion.div>
          </motion.div>
    </div>

  )
}

export default MobileNav
