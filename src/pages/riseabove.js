import React from 'react';
import CamcoNavbar from '../components/camconavbar.js';
import Footer from '../components/footer.js';
import NavParticles from '../components/navparticles.js';
import Bubbles from '../components/bubbles.js'
import './riseabove.scss';
import { motion } from 'framer-motion';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import RiseAboveLogo from '../../static/riseabove.svg';
import RACSlogo from '../../static/RACS.png'

const RiseAbove = () => {


  return (
    <div className="container">
      <CamcoNavbar />
      <NavParticles />
      <div className="white-bg">
        <motion.div className="riseabove-logo-container"  initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 2}}>
          <Bubbles />
          <motion.img className="riseabove-logo"  src={RiseAboveLogo} key={RiseAboveLogo} initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 2}}/>
        </motion.div>


        <motion.div>
        <h4>We assist and guide our clients into achieving their most ambitious business development goals, and strategic objectives.</h4><br/>
        <p>With the highest levels of professionalism and experience, we provide strategic counsel, creative solutions, and prompt, responsive services. Rise Above helps you massively break through any barriers to bring your contribution to delighted new customers in many different lands, across many different seas. We will assist you to capitalize on that success in bringing branding and company image; to give repetitive sales and create a number of splashes in the Domestic and International Business market.</p>
        </motion.div>

        <motion.div>

        <motion.div className="racs-container">
          <motion.img className="racs-pic" src={RACSlogo} key={RACSlogo}/>
        </motion.div>

        <p>A full service marketing agency that specializes in helping clients
        maximize their business potential by allowing them to focus on their strengths
        and priorities while outsourcing their marketing.</p>
        <p>We develop cost-effective marketing programs which include: traditional,
        non-traditional, and grassroots initiatives with an entrepreneurial approach
        tailored to meet the goals and objectives of our clients. RACS, takes a partnership
        approach when it comes to building relationships with our clients.</p>
        </motion.div>

        <motion.div className="riseabove-section">
        <h4 className="heading-center heading-cta"><strong>Digital Media & Advertising</strong></h4>
        <h5>Email Publications</h5>
        <p>Very similar to the traditional Sunday paper, digital/web blasts serve to
        keep personal members up to date on company information and details.</p>
        <h5>Web Ads</h5>
        <p>As the World Wide Web continues to grow and expand beyond our wildest expectations,
        the opportunities for brand advertising has become endless throughout the entire web.</p>
        <h5>Ad Sponsors / Endorsement Management</h5>
        <p>To fully maximize on market expansion, we find it beneficial to partner with supporting
        products and brands that compliment your business.</p>
        </motion.div>

        <motion.div className="riseabove-section">
        <h4 className="heading-center heading-cta"><strong>Marketing</strong></h4>
        <h5>Brand Consultation / Strategic Planning</h5>
        <p>Thoroughly map out and develop the best fit of approach for your brand.</p>
        <h5>Brand Identity</h5>
        <p>As we all know, PRESENTATION IS KEY! It is imperative to us that each client
        has a unique and striking image to convey it’s presence in the market.</p>
        <h5>Marketing Research</h5>
        <p>Extensive research and study on how to set your brand apart from and beyond your competitors.</p>
        <h5>Social Media</h5>
        <p>In the last decade or so, social media has been proven to be a top method of brand marketing, publications,
        and promotions. A strong social media presence is a vital sector of our marketing services.</p>
        </motion.div>

        <motion.div className="riseabove-section">
        <h4 className="heading-center heading-cta"><strong>Advertising</strong></h4>
        <h5>Strategic Planning</h5>
        <p>We value personal company visions and messages. Strategy is where smart will always meet clever.</p>
        <h5>Campaign Development</h5>
        <p>Staying up to date on current market trends, along with cutting edge technology, conveying a brand
        is the predominant window of both introduction and staying afloat.</p>
        <h5>Creative Direction</h5>
        <p>Whether it's a commercial, digital media, or classic print -as our biggest sector-unique, eye-catching,
        creative content and imagery is definitely key.</p>
        <h5>Web & App Development</h5>
        <p>We specialize in clean cut user friendly web and mobile design and development including vivid and purposeful
        SEO, SEM, PPC, and more.</p>
        <br/>
        </motion.div>

        <Footer />
        <br/>
        <br/>
        <br/>
        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default RiseAbove
