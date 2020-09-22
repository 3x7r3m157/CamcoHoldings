import React from "react";
import './index.scss';
import Navbar from '../components/camconavbar.js';
import BackgroundImage from '../../static/Untitled-1.jpg';
import Particles from '../components/particles.js';
import ParticleCamCo from '../../static/CamCo(solid).svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';

const Home = ({ isVisible }) => {
  return (

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

        <motion.div className="mobile-landing-nav">
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

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 7}}>
            <motion.div className="mobile-nav-spacing">
              <Link className="mobile-nav-item" to="/contact/">CONTACT</Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1 }}/>

    </div>

  )
}

export default Home




// AAPL	7.069809 125.25	93.50	(0.30%)
// MSFT	5.96303	228.50	-0.41	(-0.18%)
// AMZN	4.943415 3,401.50	-0.30	(-0.01%)
// FB	2.44669	293.75	0.09	(0.03%)
// GOOGL	1.69712	1,638.00	-1.43	(-0.09%)
// GOOG	1.660105 1,642.00	-2.41	(-0.15%)
// BRK.B	1.464482 218.55	0.00	(0.00%)
// JNJ	1.39986	153.42	-0.22	(-0.14%)
// V	1.236582 215.63	-0.08	(-0.04%)
// PG	1.18805	138.56	-0.21	(-0.15%)
// MA	1.091019 366.12	0.00	(0.00%)
// JPM	1.08317	102.78	0.01	(0.01%)
// NVDA	1.079197 525.95	0.04	(0.01%)
// HD	1.07819	286.42	0.13	(0.05%)
// UNH	1.026635 313.60	-0.77	(-0.24%)
// CRM	0.864702 270.35	-0.75	(-0.28%)
// VZ	0.854143 59.23	-0.03	(-0.05%)
// ADBE	0.852847 516.44	0.00	(0.00%)
// DIS	0.838971 135.38	-0.16	(-0.12%)
// PYPL	0.833331 204.61	0.13	(0.06%)
// NFLX	0.80389	523.11	-0.78	(-0.15%)
// MRK	0.752141 85.60	-0.05	(-0.06%)
// T	0.739933 30.41	0.37	(1.23%)
// PFE	0.730444 37.91	0.00	(0.00%)
// BAC	0.706458 26.28	-0.02	(-0.08%)
// CMCSA	0.704606 44.76	0.20	(0.45%)
// ABT	0.683723 110.60	-0.19	(-0.17%)
// WMT	0.67195 140.30	0.00	(0.00%)
// PEP	0.66625	139.90	-0.04	(-0.03%)
// KO	0.64751	49.86	0.03	(0.06%)
// CSCO	0.622915 42.17	-0.03	(-0.07%)
// XOM	0.583606 40.69	0.00	(0.00%)
// ABBV	0.577214 94.03	-0.14	(-0.15%)
// TMO	0.576862 425.10	0.62	(0.15%)
// CVX	0.550597 85.70	0.07	(0.08%)
// MCD	0.547986 214.90	-0.01	(-0.00%)
// ACN	0.532934 242.99	0.00	(0.00%)
// COST	0.53115  348.12	-0.25	(-0.07%)
// AMGN	0.516536 252.56	-0.56	(-0.22%)
// MDT	0.497741 108.00	0.14	(0.13%)
// BMY	0.49126	62.16	-0.21	(-0.34%)
// NKE	0.476792 112.47	0.18	(0.16%)
// NEE	0.474088 279.55	0.00	(0.00%)
// AVGO	0.47091	345.75	0.93	(0.27%)
// UNP	0.458259 195.00	-0.13	(-0.07%)
// LIN	0.457733 253.57	0.00	(0.00%)
// QCOM	0.45330 118.39	0.19	(0.16%)
// TXN	0.451018 143.20	-0.29	(-0.20%)
// DHR	0.4467 206.00	0.36	(0.18%)
// LOW	0.43611	165.77	0.26	(0.16%)
// LLY	0.434534 147.34	0.00	(0.00%)
// PM	0.432665 80.60	-0.14	(-0.17%)
// ORCL	0.413358 57.88	0.00	(0.00%)
// HON	0.404627 168.38	0.00	(0.00%)
// UPS	0.391809 162.55	0.19	(0.12%)
// IBM	0.384399 125.29	0.22	(0.18%)
// AMT	0.3818 249.59	0.00	(0.00%)
// C	0.373969 52.28	0.00	(0.00%)
// LMT	0.338681 395.59	0.00	(0.00%)
// AMD	0.338616 85.54	-0.01	(-0.01%)
// SBUX	0.3384 85.10	0.10	(0.12%)
// MMM	0.327796 165.76	0.10	(0.06%)
// FIS	0.324466 152.47	0.00	(0.00%)
// BA	0.324364 175.95	0.15	(0.09%)
// CHTR	0.321551 615.64	0.00	(0.00%)
// BLK	0.31878 601.00	-0.06	(-0.01%)
// WFC	0.318653 24.69	0.00	(0.00%)
// NOW	0.318293 487.87	0.00	(0.00%)
// INTU	0.31247 349.25	3.14	(0.91%)
// RTX	0.3111 62.40	0.16	(0.26%)
// SPGI	0.30454 366.83	0.00	(0.00%)
// MDLZ	0.289108 58.11	-0.20	(-0.34%)
// CVS	0.287784 63.21	0.00	(0.00%)
// ISRG	0.287342 727.50	0.49	(0.07%)
// GILD	0.286461 65.60	0.34	(0.52%)
// 0.282365 43.95	0.02	(0.05%)
// CAT	0.269513 143.63	0.00	(0.00%)
// BKNG	0.269174 1,945.24	-0.01	(-0.00%)
// ZTS	0.262449 160.00	0.00	(0.00%)
// TGT	0.26096 151.22	0.37	(0.25%)
// PLD	0.259885 102.47	-0.02	(-0.02%)
