import React from 'react';
import CamcoNavbar from '../components/camconavbar.js';
import Footer from '../components/footer.js';
import NavParticles from '../components/navparticles.js';
import Bubbles from '../components/bubbles.js'
import './styles.scss';
import { motion } from 'framer-motion';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import RiseAboveLogo from '../../static/riseabove.svg';



const RiseAbove = () => {


  return (
    <div className="container">
      <CamcoNavbar />
      <NavParticles />
      <div className="white-bg">
        <motion.div className="riseabove-logo-container">
          <Bubbles />
          <motion.img className="riseabove-logo"  src={RiseAboveLogo} key={RiseAboveLogo} initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 2}}/>
        </motion.div>
        <h3>We assist and guide our clients into achieving their most ambitious business development goals, and strategic objectives.</h3><br/>
        <p>With the highest levels of professionalism and experience, we provide strategic counsel, creative solutions, and prompt, responsive services. Rise Above helps you massively break through any barriers to bring your contribution to delighted new customers in many different lands, across many different seas. We will assist you to capitalize on that success in bringing branding and company image; to give repetitive sales and create a number of splashes in the Domestic and International Business market.</p>
        <h3 className="heading-center">RISE ABOVE CREATIVE SOLUTIONS</h3>
        <p>A full service marketing agency that specializes in helping clients
        maximize their business potential by allowing them to focus on their strengths
        and priorities while outsourcing their marketing.</p>
        <p>We develop cost-effective marketing programs which include: traditional,
        non-traditional, and grassroots initiatives with an entrepreneurial approach
        tailored to meet the goals and objectives of our clients. RACS, takes a partnership
        approach when it comes to building relationships with our clients.</p>
        <h4 className="heading-center heading-cta">DIGITAL MEDIA AND ADVERTISING</h4>
        <h5>EMAIL PUBLICATIONS</h5>
        <p>Very similar to the traditional Sunday paper, digital/web blasts serve to
        keep personal members up to date on company information and details.</p>
        <h5>WEB ADS</h5>
        <p>As the World Wide Web continues to grow and expand beyond our wildest expectations,
        the opportunities for brand advertising has become endless throughout the entire web.</p>
        <h5>AD SPONSORS / ENDORSEMENT MANAGMENT</h5>
        <p>To fully maximize on market expansion, we find it beneficial to partner with supporting
        products and brands that compliment your business.</p>
        <h4 className="heading-center heading-cta">MARKETING</h4>
        <h5>BRAND CONSULTATION / STRATEGIC PLANNING</h5>
        <p>Thoroughly map out and develop the best fit of approach for your brand.</p>
        <h5>BRAND IDENTITY</h5>
        <p>As we all know, PRESENTATION IS KEY! It is imperative to us that each client
        has a unique and striking image to convey it’s presence in the market.</p>
        <h5>MARKETING RESEARCH</h5>
        <p>Extensive research and study on how to set your brand apart from and beyond your competitors.</p>
        <h5>SOCIAL MEDIA</h5>
        <p>In the last decade or so, social media has been proven to be a top method of brand marketing, publications,
        and promotions. A strong social media presence is a vital sector of our marketing services.</p>
        <h4 className="heading-center heading-cta">ADVERTISING</h4>
        <h5>STRATEGIC PLANNING</h5>
        <p>We value personal company visions and messages. Strategy is where smart will always meet clever.</p>
        <h5>CAMPAIGN DEVELOPMENT</h5>
        <p>Staying up to date on current market trends, along with cutting edge technology, conveying a brand
        is the predominant window of both introduction and staying afloat.</p>
        <h5>CREATIVE DIRECTION</h5>
        <p>Whether it's a commercial, digital media, or classic print -as our biggest sector-unique, eye-catching,
        creative content and imagery is definitely key.</p>
        <h5>WEB & APP DESIGN/DEVELOPMENT</h5>
        <p>We specialize in clean cut user friendly web and mobile design and development including vivid and purposeful
        SEO, SEM, PPC, and more.</p>
        <br/>
        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default RiseAbove
