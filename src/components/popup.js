import React from 'react';

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

const Popup = () => {
  const [popupIsOpen, setPopupOpen] = React.useState(false);

  function openPopup() {
    setPopupOpen(true);
  }

  function closePopup(){
    setPopupOpen(false);
  }

  return (
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
  )
}

export default Popup;
