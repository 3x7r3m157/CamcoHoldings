import React from 'react';
import CamcoNavbar from '../components/camconavbar.js';
import './about.scss';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import { Image, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import NavParticles from '../components/navparticles.js'
import { Link } from 'gatsby';
import Footer from '../components/footer.js';
import CamcoModel from '../../static/CamcoModel.png';
import Breakdown from '../../static/breakdown.png';

const About = () => {
  return (
    <div className="container">
      <CamcoNavbar />
      <NavParticles />

      <div className="white-bg">



        <div className="heading-cta">
          <h1>We are the future of entrepreneurship and business development.</h1>
          <h1></h1>
        </div>




        <p>CamCo Commercial Inc uses an opportunistic private equity strategy with a focus on, Commercial
        real estate, themed developments, international brand development with Pro Athletes, Celebrities
        and other consumer-facing sectors. The CamCo Ventures fund has an experienced develop team that has
        developed and managed over 7m square feet of development with some of the biggest Hotel resorts in
        the world as well as working and consulting with some of the biggest brands in the world.</p>

        <p>The firm maintains a merchant’s focus on its investment portfolio by designing, developing,
        building, owning, and operating each of its investments. CamCo Ventures Fund is driven by first-hand
        knowledge of all operational aspects of its entities.</p> <h5>Our portfolio breakdown is as follows:</h5>




        <div className="breakdown-container">
          <motion.img className="breakdown" key={Breakdown} src={Breakdown}/>
        </div>



        <h2>Our Investment Process</h2>
        <ul>
          <li>Identification of potential investments begins with insight provided by CamCo’s network of business and consumer services, contacts as well as its operational experience. Economic sector and marketplace analyses are performed to determine attractive areas to invest.</li>
          <li>Due diligence focuses on a thorough analysis of each opportunity and ongoing research which may include credit analysis, fundamental financial analysis, management reviews, and operational reviews before financial models/ proforma are created.</li>
          <li>Portfolio positions are determined on a relative basis according to individually set risk/return criteria. The major focus is on real estate, high volume consumer goods, securities and quick service restaurant sector.</li>
          <li>The risk management process begins with maintaining control over every aspect of a business. The operational staff maintains a thorough knowledge of the investments and seasoned management teams run each investment to minimize the volatility of returns</li>
        </ul>



        <div className="camco-model-container">
          <motion.img className="camco-model" key={CamcoModel} src={CamcoModel}/>
        </div>



        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default About
