import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import MobileNav from '../components/mobilenav.js';
import BackgroundImage from '../../static/Untitled-1.jpg';
import Particles from '../components/particles.js';
import ParticleCamCo from '../../static/CamCo(solid).svg';
import { motion, AnimatePresence } from 'framer-motion';

const Mobile = ({ isVisible }) => {
  return (

    <div className="intro-container">
    <MobileNav/>
    <Particles />
    <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.75 }}/>
    </div>

  )
}

export default Mobile
