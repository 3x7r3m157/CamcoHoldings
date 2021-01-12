import React from 'react';
import Navbar from '../components/camconavbar.js'
import './philanthropy.scss';
import { motion } from 'framer-motion';
import NavParticles from '../components/navparticles.js'
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import Footer from '../components/footer.js';
import LinkingSports from '../../static/linkingsports.svg';
import LinkingSportsMobile from '../../static/linkingsports.mobile.png';
import GoodwillPic1 from '../../static/goodwill1.jpg'
import GoodwillPic2 from '../../static/goodwill2.jpg'

const Philanthropy = () => {
  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg">

        <motion.div className="linkingsports-container">
          <motion.img className="linkingsports" key={LinkingSports} src={LinkingSports}/>
          <motion.img className="linkingsports-mobile" key={LinkingSportsMobile} src={LinkingSportsMobile}/>
        </motion.div>



        <p>Our Philanthropy Division Established in 2004- Linking Sports and Communities is a 501(©)(3)
        non-profit that seeks to enhance the relationships in our communities by encouraging the youth
        to lead active, healthy lifestyles, and to continue the advancement of their education. Through
        our labor, we aim to bestow skills ranging from: accountability, financial responsibility, and
        teamwork. Going strong for 15 plus years we aim to enhance these relationships even further. We
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
        <h5>Principles for CamCo's Sustainable Global Business:</h5>
        <ul>
          <li>Enhance liveability</li>
          <li>Create opportunities for economic prosperity</li>
          <li>Foster environmental responsibility</li>
          <li>Embrace design excellence</li>
          <li>Demonstrate visionary leadership and strong governance</li>
        </ul>
        <br/>
        <Footer />
        <br/>
        <br/>
        <br/>
        <motion.div className="background-container">
          <motion.div className="background-image" initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}></motion.div>
          <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
        </motion.div>
      </div>
      <motion.img className="nav-background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
      </div>
  )
}

export default Philanthropy


// <div className="goodwill-pics-container">
//   <motion.img className="goodwill-pics" src={GoodwillPic2} key={GoodwillPic2} />
// </div>
// <h2 className="heading-center heading-cta">CamCo Family Foundation has pledged $200 million to Goodwill of Central and Northern Arizona Foundation to help individuals achieve lifelong prosperity.</h2>
// <p>Northern Arizona Foundation to help individuals achieve lifelong prosperity. September 9th 2020 he presented the first installment of $10 million to Goodwill and will continue donating $10 million a year, for the next 20 years. The funds will be used to create new adult education programs and future projects to help individuals living in poverty.</p>
// <p>“Currently, more than 721,000 Arizonans do not have a high school diploma,” said Colvin. “The best way to help these individuals move out of poverty is by allowing them to achieve their educational needs and move on to a successful career path. Goodwill’s services are critical to anyone who is looking to achieve family sustaining employment. They are committed to helping these individuals build a better future and find a sustainable job – and for many that starts with a high school diploma. Generational wealth starts with creating more contributing members of society and by wealth we are referring to knowledge, health and self-actualization.”</p>
// <div className="goodwill-pics-container">
//   <motion.img className="goodwill-pics" src={GoodwillPic1} key={GoodwillPic1} />
// </div>
