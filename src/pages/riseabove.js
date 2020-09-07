import React from 'react';
import CamcoNavbar from '../components/camconavbar.js';
import Footer from '../components/footer.js';
import NavParticles from '../components/navparticles.js';
import './styles.scss';
import { motion } from 'framer-motion';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';


const RiseAbove = () => {
  return (
    <div className="container">
      <CamcoNavbar />
      <NavParticles />
      <div className="white-bg">
        <h1 className="heading-cta">Rise Above Creative Solutions</h1>
        <p>A full service marketing agency that specializes in helping clients
        maximize their business potential by allowing them to focus on their strengths
        and priorities while outsourcing their marketing.</p>
        <p>We develop cost-effective marketing programs which include: traditional,
        non-traditional, and grassroots initiatives with an entrepreneurial approach
        tailored to meet the goals and objectives of our clients. RACS, takes a partnership
        approach when it comes to building relationships with our clients.</p>
        <h3 className="heading-center heading-cta">DIGITAL MEDIA AND ADVERTISING</h3>
        <h5>EMAIL PUBLICATIONS</h5>
        <p>Very similar to the traditional Sunday paper, digital/web blasts serve to
        keep personal members up to date on company information and details.</p>
        <h5>WEB ADS</h5>
        <p>As the World Wide Web continues to grow and expand beyond our wildest expectations,
        the opportunities for brand advertising has become endless throughout the entire web.</p>
        <h5>AD SPONSORS / ENDORSEMENT MANAGMENT</h5>
        <p>To fully maximize on market expansion, we find it beneficial to partner with supporting
        products and brands that compliment your business.</p>
        <h3 className="heading-center heading-cta">MARKETING</h3>
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
        <h3 className="heading-center heading-cta">ADVERTISING</h3>
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
        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} animate={{ x:2000 }} transition={{ ease: 0, duration: 100 }}/>
        <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} animate={{ x:4000 }} transition={{ ease: 0, duration: 100 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} animate={{ x:4000 }} transition={{ ease: 0, duration: 100 }}/>
    </div>
  )
}

export default RiseAbove
