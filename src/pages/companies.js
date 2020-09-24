import React from 'react';
import Navbar from '../components/camconavbar.js';
import NavParticles from '../components/navparticles.js';
import Footer from '../components/footer.js';
import CompanyGrid from '../components/companygrid.js'
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import CCAdvisors from '../../static/ccadvisors_black.svg';
import CCVentures from '../../static/ccventures_black.svg';
import CCCommercial from '../../static/cccommercial_black.svg';
import CCChampion from '../../static/camcochampion.svg';
import CCTech from '../../static/CamcoGalaxyLogo.svg';
import CCRestaurants from '../../static/ccrestaurants.svg';
import CCCoalition from '../../static/cccoalition.svg';
import CCHotels from '../../static/cchospitality.svg';
import NeverStop from '../../static/NS.png'
import './companies.scss';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

import Facebook from '../../static/facebook.svg';
import Linkedin from '../../static/linkedin.svg';
import Instagram from '../../static/instagram.svg';
import { Link } from 'gatsby';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'rgba(255, 255, 255, 0.7 );',
    }
};

const Companies = () => {
  return (
    <>
    <div className="container">
      <Navbar />
      <NavParticles />
      <CompanyGrid />
    <motion.img className="nav-background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
    <div className="company-footer">
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
      <Link to="/terms/">Terms<span className="dot">    &#183;    </span></Link>
      <Link to="/privacy/">Privacy</Link>
      </div>
    </div>
    </>
  )
}

export default Companies

// <p>CC requires that on a going in basis, with validated costs and revenues, that each project in not more than 18 months will provide a distribution to its members that is equal to equity invested by CC (assuming equity for this purpose is 25% of cost), with a going in yield (revenue over costs) of 200-250 basis points over a market based but conservative cap rate for sale of the finished project. This is a metric that has proven successful to over and over again.</p>
