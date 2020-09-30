import React from 'react';
import Modal from 'react-modal';
import ReactDelayRender from 'react-delay-render';
import Cam from '../../static/cam.jpg'
import { motion } from 'framer-motion';
import '../pages/popup.scss';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '10%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'rgba(255, 255, 255, 0.7 );',
  }
};

const Popup = () => {
  const [popupIsOpen, setPopupOpen] = React.useState(true);
  function openPopup() {
    setPopupOpen(true);
  }

  function closePopup(){
    setPopupOpen(false);
  }

  return (

    <Modal isOpen={popupIsOpen} onRequestClose={closePopup} style={customStyles} contentLabel="Letter from the Chairman">
      <div className="popup-container">
        <div className="popup-pic-container">
          <motion.img className="popup-pic" key={Cam} src={Cam} />
        </div>
        <div className="popup-text modal-text">
          <h4>Letter from the Chairman</h4>
          <p>Welcome to CamCo Commercial Inc, I am delighted that you decided to take a few moments to learn more about our organization. I believe you will find the work we do at CamCo Commercial Inc to be some of the most rewarding and challenging work in the world. The mission of CamCo Commercial Inc is to create a platform to empower the future leaders of our world by creating a network of businesses and business opportunities that will provide employment for thousands of people around the world.  Everything we do is helping make someone else’s life better, rather it be short or long term!</p>
          <p>Today we may be developing a billion dollar project and tomorrow we may be assisting a group of underprivileged kids study for a math test. Whatever it may be, we are making an impact.</p>
          <a className="modal-text modal-button" href="#" onClick={closePopup}><h6 className="modal-text">Go Back</h6></a>
        </div>
      </div>
    </Modal>
  )
}

export default ReactDelayRender({delay: 1000})(Popup);
