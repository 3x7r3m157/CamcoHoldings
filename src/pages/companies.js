import React from 'react';
import Navbar from '../components/camconavbar.js';
import NavParticles from '../components/navparticles.js';
import Footer from '../components/footer.js';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import CCAdvisors from '../../static/ccadvisors_black.svg';
import CCVentures from '../../static/ccventures_black.svg';
import CCCommercial from '../../static/cccommercial_black.svg';
import CCChampion from '../../static/camcochampion.svg';
import CCTech from '../../static/CamcoGalaxyLogo.svg';

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



      <p>CamCo Commercial Inc uses an opportunistic private equity strategy with a focus on, Commercial real estate, themed developments, international brand development with Pro Athletes, Celebrities
      and other consumer-facing sectors.</p>
      <p>The Rise Venture fund has an experienced develop team that has developed and managed over 7m square feet of development with some of the biggest Hotel resorts in the world as well as working and consulting with some of the biggest brands in
      the world.</p>
      <p>The firm maintains a merchant’s focus on its investment portfolio by designing, developing, building, owning, and operating each of its
      investments. Rise Venture Fund is driven by first-hand knowledge of all operational aspects of its entities.</p>



      <motion.div  className="cc-container">
        <motion.img className="ccca-logo" key={CCAdvisors} src={CCAdvisors} />
      </motion.div>

      <p>CamCo Commercial Advisors provides a range of services for all commercial real estate needs including market knowledge, Investor relations, and off-market relations. CamCo Commercial Advisors is a new company that provides high-level expertise in commercial real estate sales in the state of Arizona, with expansion opportunities to CA,TX, OR, FL</p>
      <p>We go a step further with our buyers and we go on- site for them. We visit the asset of their choice and take inside and outside panoramic photos for their viewing. We can email the photos or have a face to face showing with the buyer.</p>





      <motion.div  className="cc-container">
        <motion.img className="ccv-logo" key={CCVentures} src={CCVentures} />
      </motion.div>

      <p className="ccv">The CamCo Ventures LLC machine provide some combination of education, capital, co-working space, product-development support and access to a strong support network. We enable companies that are ready for venture capital to quickly get up to steam.</p>



      <motion.div  className="cc-container">
        <motion.img className="ccch-logo" key={CCChampion} src={CCChampion} />
      </motion.div>

      <p>Camco Champion’s (CC) initial transactions are intended in two non-speculative areas of development:</p>
      <ul>
        <li>First, Signal Tenant Net Lease (STNL) transaction with credit tenants in the Fuel & C Store, Quick Service Restaurant and Fast Food Restaurant with Drive Thru Operations,</li>
        <li>Preferably utilizing as a deliver method, Ground leases, although reverse Build to Suit or full Build to Suite when credit allows and the market demands, and</li>
        <li>Leased prior to Close of Escrow.</li>
        <li>Second smaller scale multi-tenant retail, anchored by major grocery or other stores that are also reasonably Amazon resistant, typically with adjacent STNL</li>
        <li>In this case delivering with Space/Premises leases, and</li>
        <li>Also leased prior to Close of Escrow. As CC matures and delivers on its track record, larger transactions can be considered, again on non-speculative basis.</li>
      </ul>

      <p>CC requires that on a going in basis, with validated costs and revenues, that each project in not more than 18 months will provide a distribution to its members that is equal to equity invested by CC (assuming equity for this purpose is 25% of cost), with a going in yield (revenue over costs) of 200-250 basis points over a market based but conservative cap rate for sale of the finished project. This is a metric that has proven successful to over and over again.</p>



      <motion.div  className="cc-container">
        <motion.img className="cct-logo" key={CCTech} src={CCTech} />
      </motion.div>

      <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>
    </div>
    <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Companies
