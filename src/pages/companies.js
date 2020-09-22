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
import CCRestaurants from '../../static/ccrestaurants.svg';
import CCCoalition from '../../static/cccoalition.svg';
import CCHotels from '../../static/cchotels_black.svg';
import NeverStop from '../../static/NS.png'
import "normalize.css"
import './companies.scss';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

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
  var subtitle;
  const [commercialIsOpen,setCommercialOpen] = React.useState(false);
  const [advisorsIsOpen,setAdvisorsOpen] = React.useState(false);
  const [venturesIsOpen,setVenturesOpen] = React.useState(false);
  const [championIsOpen,setChampionOpen] = React.useState(false);
  const [techIsOpen,setTechOpen] = React.useState(false);
  const [restaurantsIsOpen,setRestaurantsOpen] = React.useState(false);
  const [coalitionIsOpen,setCoalitionOpen] = React.useState(false);
  const [hotelsIsOpen,setHotelsOpen] = React.useState(false);
  const [neverstopIsOpen, setNeverstopOpen] = React.useState(false);

  function openCommercial() {
    setCommercialOpen(true);
  }

  function closeCommercial(){
    setCommercialOpen(false);
  }

  function openAdvisors() {
    setAdvisorsOpen(true);
  }

  function closeAdvisors(){
    setAdvisorsOpen(false);
  }

  function openVentures() {
    setVenturesOpen(true);
  }

  function closeVentures(){
    setVenturesOpen(false);
  }

  function openChampion() {
    setChampionOpen(true);
  }

  function closeChampion(){
    setChampionOpen(false);
  }

  function openTech() {
    setTechOpen(true);
  }

  function closeTech(){
    setTechOpen(false);
  }

  function openRestaurants() {
    setRestaurantsOpen(true);
  }

  function closeRestaurants(){
    setRestaurantsOpen(false);
  }

  function openCoalition() {
    setCoalitionOpen(true);
  }

  function closeCoalition(){
    setCoalitionOpen(false);
  }

  function openHotels() {
    setHotelsOpen(true);
  }

  function closeHotels(){
    setHotelsOpen(false);
  }

  function openNeverstop(){
    setNeverstopOpen(true);
  }

  function closeNeverstop(){
    setNeverstopOpen(false);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  return (
    <div className="container">
      <Navbar />
      <NavParticles />
      <div className="white-bg company-wrapper">
        <div className="companies">
        <motion.h6 className="heading-tooltip-mobile" initial={{opacity: 0.5}} animate={{opacity: 0}} transition={{duration: 5}}>Touch a company for description</motion.h6>

          <motion.div className="company">
            <motion.img className="ccc-logo" key={CCCommercial} src={CCCommercial} whileTap={{scale: 0.9}} whileHover={{scale: 1.1}} onClick={openCommercial}/>
          </motion.div>

          <motion.div className="company">
            <motion.img className="ccv-logo" key={CCVentures} src={CCVentures} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openVentures}/>
          </motion.div>

          <motion.div className="company">
            <motion.img className="ccca-logo" key={CCAdvisors} src={CCAdvisors} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openAdvisors}/>
          </motion.div>

          <motion.div className="company">
            <motion.img className="ccch-logo" key={CCChampion} src={CCChampion} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openChampion}/>
          </motion.div>

          <motion.div className="company company-bottomrow">
            <motion.img className="ccco-logo" key={CCCoalition} src={CCCoalition} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openCoalition}/>
          </motion.div>

          <motion.div className="company company-bottomrow">
            <motion.img className="ccr-logo" key={CCRestaurants} src={CCRestaurants} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openRestaurants}/>
          </motion.div>

          <motion.div className="company company-bottomrow">
            <motion.img className="cct-logo" key={CCTech} src={CCTech} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}}/>
          </motion.div>

          <motion.div className="company company-bottomrow">
            <motion.img className="ccho-logo" key={CCHotels} src={CCHotels} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openHotels}/>
          </motion.div>

          <motion.div className="company company-bottomrow">
            <motion.img className="ns-logo" key={NeverStop} src={NeverStop} whileHover={{scale: 1.1}}  whileTap={{scale: 0.9}} onClick={openNeverstop}/>
          </motion.div>

          <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.25 }}/>


      <Modal isOpen={commercialIsOpen} onRequestClose={closeCommercial} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Commercial</h4>
          <p>CamCo Commercial Inc uses an opportunistic private equity strategy with a focus on, Commercial real estate, themed developments, international brand development with Pro Athletes, Celebrities
          and other consumer-facing sectors.</p>
          <p>The Rise Venture fund has an experienced develop team that has developed and managed over 7m square feet of development with some of the biggest Hotel resorts in the world as well as working and consulting with some of the biggest brands in
          the world.</p>
          <p>The firm maintains a merchant’s focus on its investment portfolio by designing, developing, building, owning, and operating each of its
          investments. Rise Venture Fund is driven by first-hand knowledge of all operational aspects of its entities.</p>
          <a className="modal-text modal-button" href="#" onClick={closeCommercial}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={advisorsIsOpen} onRequestClose={closeAdvisors} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Commercial Advisors</h4>
          <p>CamCo Commercial Advisors provides a range of services for all commercial real estate needs including market knowledge, Investor relations, and off-market relations. CamCo Commercial Advisors is a new company that provides high-level expertise in commercial real estate sales in the state of Arizona, with expansion opportunities to CA,TX, OR, FL</p>
          <p>We go a step further with our buyers and we go on- site for them. We visit the asset of their choice and take inside and outside panoramic photos for their viewing. We can email the photos or have a face to face showing with the buyer.</p>
          <a className="modal-text modal-button" href="#" onClick={closeAdvisors}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={venturesIsOpen} onRequestClose={closeVentures} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Ventures</h4>
          <p className="ccv">The CamCo Ventures LLC machine provide some combination of education, capital, co-working space, product-development support and access to a strong support network. We enable companies that are ready for venture capital to quickly get up to steam.</p>
          <a className="modal-text modal-button" href="#" onClick={closeVentures}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={championIsOpen} onRequestClose={closeChampion} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Champion</h4>
          <p>Camco Champion’s (CC) initial transactions are intended in two non-speculative areas of development:</p>
          <ul>
            <li>First, Signal Tenant Net Lease (STNL) transaction with credit tenants in the Fuel & C Store, Quick Service Restaurant and Fast Food Restaurant with Drive Thru Operations,</li>
            <li>Preferably utilizing as a deliver method, Ground leases, although reverse Build to Suit or full Build to Suite when credit allows and the market demands, and</li>
            <li>Leased prior to Close of Escrow.</li>
            <li>Second smaller scale multi-tenant retail, anchored by major grocery or other stores that are also reasonably Amazon resistant, typically with adjacent STNL</li>
            <li>In this case delivering with Space/Premises leases, and</li>
            <li>Also leased prior to Close of Escrow. As CC matures and delivers on its track record, larger transactions can be considered, again on non-speculative basis.</li>
          </ul>

          <a className="modal-text modal-button" href="#" onClick={closeChampion}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={techIsOpen} onRequestClose={closeTech} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Technology Ventures</h4>
          <a className="modal-text modal-button" href="#" onClick={closeTech}><h6 className="modal-text">Go Back</h6></a>
        </div>

      </Modal>

      <Modal isOpen={restaurantsIsOpen} onRequestClose={closeRestaurants} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Restaurants</h4>
          <p>We are a professional group of business owners, operators, managers, chefs, and food enthusiasts. We are invested in the communities that we live in and take great pride in the services that we offer. We believe that good health is a part of true happiness and good health starts with what you put into your body. Our Restaurant portfolio focuses on quick service franchises as well as sophisticated yet casual dinning experiences.</p>
          <a className="modal-text modal-button" href="#" onClick={closeRestaurants}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={coalitionIsOpen} onRequestClose={closeCoalition} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Coalition</h4>
          <p>CamCo Coalition - Empowering the people , one business at a time. CCC is a venture arm that supports grass roots businesses opportunities that empowers society.</p>
          <a className="modal-text modal-button" href="#" onClick={closeCoalition}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={hotelsIsOpen}  onRequestClose={closeHotels} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>CamCo Hotels</h4>
          <p>A soon to be worldwide leader in Boutique hotels and Luxury condo Residences.</p>
          <p>Sometimes you just feel the desire to be immersed in the natural world. CC Hotels will allow you to experience both luxury and the zen wonder of being totally surrounded by nature.</p>
          <h6>Luxury 4 star hotels:</h6>
          <ul>
            <li>Independent Operator » 150+ Keys</li>
            <li>Full Service</li>
          </ul>
          <h6>Locations:</h6>
          <ul>
            <li>Scottsdale/ Phoenix AZ Alkimel 7</li>
            <li>Los Angeles CA - TBD</li>
            <li>San Diego CA - TBD</li>
            <li>Dallas TX - TBD</li>
            <li>Paris France  - TBD</li>
            <li>Athens Greece</li>
            <li>Barcalona Spain</li>
          </ul>
          <a className="modal-text modal-button" href="#" onClick={closeHotels}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>

      <Modal isOpen={neverstopIsOpen} onRequestClose={closeNeverstop} style={customStyles} contentLabel="CamCo Commercial">
        <div className="modal-text">
          <h4>NeverStop: Cameron Colvin's 12 principles of success</h4>
          <p>Since it’s launch in 2016, the NeverStop book written by Cameron Colvin has sold over 300,000 independent copies:</p>
          <ul>
            <li>Given away 150,000 books to youth programs</li>
            <li>Became corporate curriculum for a leadership program for Goodwill of Arizona Executive team of 250 employees</li>
            <li>The book has been endorsed by Dr. Lonnie L. Hammargren, M.D. (World renown neurosurgeon & former Lt. Governor, State of Nevada) and Stan Lee - Creator of Marvel Comics</li>
            <li>Has its very own day in the state of Arizona (NeverStop Day - Octobor 6th)</li>
            <li>Appeared on National TV Show THE LIST - to talk principles and how the book can apply to all</li>
          </ul>
          <a className="modal-text modal-button" href="#" onClick={closeNeverstop}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </Modal>
      </div>
    </div>

    <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} initial={{ opacity: 1}} animate={{opacity: 1}} transition={{ duration: 1.75 }}/>
    </div>
  )
}

export default Companies

// <p>CC requires that on a going in basis, with validated costs and revenues, that each project in not more than 18 months will provide a distribution to its members that is equal to equity invested by CC (assuming equity for this purpose is 25% of cost), with a going in yield (revenue over costs) of 200-250 basis points over a market based but conservative cap rate for sale of the finished project. This is a metric that has proven successful to over and over again.</p>
