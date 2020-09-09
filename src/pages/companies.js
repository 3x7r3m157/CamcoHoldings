import React from 'react';
import Navbar from '../components/camconavbar.js';
import NavParticles from '../components/navparticles.js';
import Footer from '../components/footer.js';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import CCAdvisors from '../../static/ccadvisors_black.png';
import CCVentures from '../../static/ccventures_black.png';
import CCCommercial from '../../static/cccommercial_black.png';
import './styles.scss';
import { motion } from 'framer-motion';

const Companies = () => {
  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg">
      <motion.div className="cc-container">
        <motion.img className="ccc-logo" key={CCCommercial} src={CCCommercial} />
      </motion.div>

      <h5>CamCo Commercial Inc uses an opportunistic private equity strategy with a focus on, Commercial real estate, themed developments, international brand development with Pro Athletes, Celebrities
      and other consumer-facing sectors.</h5>
      <h5>The Rise Venture fund has an experienced develop team that has developed and managed over 7m square feet of development with some of the biggest Hotel resorts in the world as well as working and consulting with some of the biggest brands in
      the world.</h5>
      <h5>The firm maintains a merchant’s focus on its investment portfolio by designing, developing, building, owning, and operating each of its
      investments. Rise Venture Fund is driven by first-hand knowledge of all operational aspects of its entities.</h5>

      <motion.div  className="cc-container">
        <motion.img className="ccca-logo" key={CCAdvisors} src={CCAdvisors} />
      </motion.div>

      <h5>CamCo Commercial Advisors provides a range of services for all commercial real estate needs including market knowledge, Investor relations, and off-market relations. CamCo Commercial Advisors is a new company that provides high-level expertise in commercial real estate sales in the state of Arizona, with expansion opportunities to CA,TX, OR, FL</h5>
      <h5>We go a step further with our buyers and we go on- site for them. We visit the asset of their choice and take inside and outside panoramic photos for their viewing. We can email the photos or have a face to face showing with the buyer.</h5>


      <motion.div  className="cc-container">
        <motion.img className="ccv-logo" key={CCVentures} src={CCVentures} />
      </motion.div>

      <h5 className="ccv">The CamCo Ventures LLC machine provide some combination of education, capital, co-working space, product-development support and access to a strong support network. We enable companies that are ready for venture capital to quickly get up to steam.</h5>

      <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
    </div>
    <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Companies
