import React from "react";
import './index.scss';
import Navbar from '../components/camconavbar.js';
import BackgroundImage from '../../static/Untitled-1.jpg';
import Particles from '../components/particles.js';
import ParticleCamCo from '../../static/CamCo(solid).svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import MobileNav from '../components/mobilenav.js';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const Home = ({ isVisible }) => {

  return (
    <>
      <MobileView>
        <motion.div className="mobile-container">
          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}>
            <motion.div>
              <Link className="hamburger" to="/mobile/"><motion.h1 className="cclogo-mobile" initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 2.5}}>CamCo</motion.h1></Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 2}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/about/">ABOUT</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 3}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/companies/">COMPANIES</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 4}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/philanthropy/">PHILANTHROPY</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 5}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/riseabove/">RISE ABOVE</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 6}}>
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
        </motion.div>
        <Particles />
        <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.75 }}/>
      </MobileView>
      <BrowserView>
      <div className="container">
        <motion.div className="intro-nav" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5, delay: 17}}>
            <Navbar className="intro-nav" />
        </motion.div>
            <Particles />
            <motion.div className="logo-container" initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 1, delay: 5}}>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 0.5}}>C</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 1}}>a</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 1.5}}>m</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 2}}>C</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 2.5}}>o</motion.h1>
            </motion.div>
            <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 1, delay: 15}}>
              <motion.div initial={{y: 0}} animate={{y: -310}} transition={{duration: 2, delay: 5}}>
                <motion.div className="tagline-container" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 2}}>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 0.3, times: [0, 0.1, 0.12, 0.2], delay: 2}}>We</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 0.6, times: [0, 0.1, 0.12, 0.2], delay: 2}}> are</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 0.9, times: [0, 0.1, 0.12, 0.2], delay: 2}}>the</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 1.2, times: [0, 0.1, 0.12, 0.2], delay: 2}}>future</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 1.5, times: [0, 0.1, 0.12, 0.2], delay: 2}}>of</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 1.8, times: [0, 0.1, 0.12, 0.2], delay: 2}}>entrepreneurship</motion.h1>
                </motion.div>
                <motion.div className="tagline-container" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 2.1, times: [0, 0.1, 0.12, 0.2], delay: 2}}>and</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 2.4, times: [0, 0.1, 0.12, 0.2], delay: 2}}>business</motion.h1>
                  <motion.h1 className="tagline" initial={{opacity: 0}} animate={{opacity: [0, 0.33, 0, 0.66, 1]}} transition={{duration: 2.7, times: [0, 0.1, 0.12, 0.2], delay: 2}}>development.</motion.h1>
                </motion.div>
              </motion.div>
              <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: -295}} transition={{duration: 2, delay: 5}}>
                <motion.div className="cta-section" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.2, delay: 6.5}}>The</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4, delay: 6.5}}>vision</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6, delay: 6.5}}>and</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 6.5}}>mission</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 6.5}}>for</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.2, delay: 6.5}}>CamCo</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.4, delay: 6.5}}>Commercial</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.6, delay: 6.5}}>Inc</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.8, delay: 6.5}}>is</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 6.5}}>to</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.2, delay: 6.5}}>create</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.4, delay: 6.5}}>a</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.6, delay: 6.5}}>platform</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.8, delay: 6.5}}>to</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3, delay: 6.5}}>empower</motion.h3>
                  </motion.div>

                  <motion.div className="cta-section" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3.2, delay: 6.5}}>the</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3.4, delay: 6.5}}>future</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3.6, delay: 6.5}}>leaders</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3.8, delay: 6.5}}>of</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4, delay: 6.5}}>our</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4.2, delay: 6.5}}>world</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4.4, delay: 6.5}}>by</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4.6, delay: 6.5}}>creating</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4.8, delay: 6.5}}>a</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5, delay: 6.5}}>network</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5.2, delay: 6.5}}>of</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5.4, delay: 6.5}}>businesses</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5.6, delay: 6.5}}>and</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5.8, delay: 6.5}}>business</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 6, delay: 6.5}}>opportunities</motion.h3>
                </motion.div>

                <motion.div className="cta-section" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 6.2, delay: 6.5}}>that</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 6.4, delay: 6.5}}>will</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 6.6, delay: 6.5}}>provide</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 6.8, delay: 6.5}}>employment</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 7, delay: 6.5}}>for</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 7.2, delay: 6.5}}>thousands</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 7.4, delay: 6.5}}>of</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 7.6, delay: 6.5}}>people</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 7.8, delay: 6.5}}>around</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 8, delay: 6.5}}>the</motion.h3>
                  <motion.h3 className="cta"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 8.2, delay: 6.5}}>world.</motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="logo-container" initial={{opacity: 0, y:-780}} animate={{opacity: 1, y:-780}} transition={{duration: 2, delay: 16}}>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 0.5}}>C</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 1}}>a</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 1.5}}>m</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 2}}>C</motion.h1>
              <motion.h1 className="cclogo" initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{damping: 2, duration: 2.5}}>o</motion.h1>
            </motion.div>

            <motion.div className="background-container">
              <motion.div className="background-image-x" initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1 }}></motion.div>
              <motion.img className="landing-background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.75 }}/>
            </motion.div>
        </div>
      </BrowserView>
    </>
  )
}

export default Home
