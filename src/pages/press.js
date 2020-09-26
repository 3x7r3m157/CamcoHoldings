import React from 'react';
import Navbar from '../components/camconavbar.js';
import NavParticles from '../components/navparticles.js';
import './press.scss';
import { motion } from 'framer-motion';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import { Link } from 'gatsby';
import Footer from '../components/footer.js'

const Press = () => {
  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg">
        <h3 className="heading-center heading-cta">Press</h3>
        <div className="press-section">
          <Link className="press-link" to="https://azbigmedia.com/business/cameron-colvin-pledges-200m-to-goodwill/"><strong>AZ BIG MEDIA</strong> - Cameron Colvin Pledges 200m to Goodwill</Link>
          <Link className="press-link" to="https://www.yourvalley.net/paradise-valley-independent/stories/camco-commercial-inc-pledges-200-million-to-goodwill-foundation,186511"><strong>YOUR VALLEY</strong> - CamCo Commercial Inc Pledges 200 Million to Goodwill Foundation</Link>
          <Link className="press-link" to="https://frontdoorsmedia.com/cameron-colvin-pledges-200-million-to-goodwill-of-central-and-northern-arizona-foundation/"><strong>FRONT DOORS MEDIA</strong> - Cameron Colvin Pledges 200 Million to Goodwill of Central and Northern Arizona Foundation</Link>
          <Link className="press-link" to="https://patch.com/arizona/phoenix/cameron-colvin-pledges-200-million-goodwill-nodx"><strong>PATCH</strong> - Cameron Colvin Pledges 200 Million to Goodwill</Link>
          <Link className="press-link" to="https://prescottenews.com/index.php/2020/09/11/camco-commercial-inc-chairman-cameron-colvin-pledges-200-million-to-goodwill-of-central-and-northern-arizona-foundation/"><strong>PRESCOTT eNEWS</strong> - CamCo Commercial Inc Chairman Cameron Colvin Pledges 200 Million to Goodwill of Central And Northern Arizona Foundation</Link>
          <Link className="press-link" to="https://philanthropynewsdigest.org/news/goodwill-of-central-and-northern-arizona-receives-200-million-pledge"><strong>PHILANTHROPY NEWS DIGEST</strong> - Goodwill of Central and Northern Arizona Receives 200 Million Pledge</Link>
          <Link className="press-link" to="https://roselawgroupreporter.com/2020/09/colvin-pledges-millions-to-goodwill/"><strong>ROSE LAW GROUP REPORTER</strong> - Colvin Pledges Millions to Goodwill</Link>
          <Link className="press-link" to="https://www.newsbreak.com/news/2058363761211/cameron-colvin-pledges-200m-to-goodwill"><strong>NEWS BREAK</strong> - Cameron Colvin Pledges 200m to Goodwill</Link>
          <Link className="press-link" to="https://www.thecsrtimes.com/2020/09/14/goodwill-of-central-and-northern-arizona-receives-200-million-pledge/"><strong>THE CSR TIMES</strong> - Goodwill of Central and Northern Arizona Receives 200 Million Pledge</Link>
          <Link className="press-link" to="https://www.kitco.com/news/video/show/Kitco-News/2238/2019-01-17/Investing-Like-A-NFLer-Cameron-Colvins-Story#_48_INSTANCE_puYLh9Vd66QY_=https%3A%2F%2Fwww.kitco.com%2Fnews%2Fvideo%2Flatest%3Fshow%3DKitco-News"><strong>KITCO</strong> - Investing Like A NFLer: Cameron Colvin</Link>
          <Link className="press-link" to="https://azbigmedia.com/real-estate/commercial-real-estate/multi-billion-dollar-akimel-7-planned-for-loops-101-and-202/"><strong>AZ BIG MEDIA</strong> - Multi-billion-dollar Akimel 7 Planned at Loops 101 and 202</Link>
          <Link className="press-link" to="https://www.enr.com/articles/48781-akimel-7-development-carries-4b-price-tag"><strong>ENR</strong> - Akimel 7 Development Carries $4b Pricetag</Link>
          <Link className="press-link" to="https://www.azcentral.com/story/news/local/scottsdale/2020/01/11/sports-and-entertainment-development-planned-loop-101-202/2828946001/"><strong>AZ CENTRAL</strong> - Tribal Land in East Valley May Finally See Development. Here's What Is Envisioned.</Link>
          <Link className="press-link" to="https://www.bizjournals.com/phoenix/news/2019/12/28/joint-venture-announces-multi-billion-dollar.html"><strong>BIZ JOURNALS</strong> - 'Multibillion-dollar' Entertainment District Planned For Tribal Land</Link>
          <Link className="press-link" to="https://www.connect.media/developers-unveil-multibillion-dollar-akimel-7/"><strong>CONNECT</strong> - Developers Unveil Multibillion-Dollar Akimel 7</Link>
          <Link className="press-link" to="https://ktar.com/story/2914386/multibillion-dollar-entertainment-sports-district-planned-near-scottsdale/"><strong>KTAR</strong> - Multibillion Dollar Entertainment, Sports District Planned Near Scottsdale</Link>
        </div>




        <Footer />
        <motion.div className="background-container">
          <motion.div className="background-image" initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}></motion.div>
          <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
        </motion.div>
      </div>
      <motion.img className="nav-background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Press
