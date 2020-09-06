import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import MobileNav from '../components/mobilenav.js';
import BackgroundImageX from '../../static/Untitled-1.jpg';
import Particles from '../components/particles.js';
import ParticleCamCo from '../../static/CamCo(solid).svg';
import { motion, AnimatePresence } from 'framer-motion';


const Mobile = ({ isVisible }) => {
  return (

    <div className="intro-container">

    <MobileNav/>
    <Particles />
    <motion.img className="background-image-x" key={BackgroundImageX} src={BackgroundImageX} animate={{ x:4000 }} transition={{ type: "tween", duration: 170 }}/>


    </div>

  )
}

export default Mobile
