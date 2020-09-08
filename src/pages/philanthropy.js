import React from 'react';
import Navbar from '../components/camconavbar.js'
import './styles.scss';
import { motion } from 'framer-motion';
import NavParticles from '../components/navparticles.js'
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import Footer from '../components/footer.js';


const Philanthropy = () => {
  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg">
        <h1 className="heading-cta">Philanthropy</h1>
        <h2>Linking Sports</h2>
        <p>Our Philanthropy Division Established in 2004- Linking Sports and Communities is a 501(©)(3)
        non-profit that seeks to enhance the relationships in our communities by encouraging the youth
        to lead active, healthy lifestyles, and to continue the advancement of their education. Through
        our labor, we aim to bestow skills ranging from: accountability, financial responsibility, and
        teamwork. Going strong for 15 plusyears we aim to enhance these relationships even further. We
        hope to accomplish these goals through the continuation of previous programs, and through the
        implementation of new, dynamic programs and events.</p>
        <h2>Sustainability</h2>
        <p>As we plan, develop, design, construct, operate and manage facilities, we embrace a total
        team approach to sustainability and work to achieve measurable results in the following areas:</p>
        <ul>
          <li>Energy Conservation</li>
          <li>Water Conservation</li>
          <li>Waste Management</li>
          <li>Indoor Air Quality</li>
        </ul>
        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Philanthropy
