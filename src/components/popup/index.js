import React from 'react';
import PropTypes from "prop-types";
import './style.css';

function Popup({ isOpen, children }) {

  return (
    <div className={`Popup ${isOpen ? ('Popup_opened') : ''}`} >
      <div className='Popup-container'>
        {children}
      </div>
    </div>
  )
}

Popup.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
};

Popup.defaultProps = {
  isOpen: () => {
  }
}

export default React.memo(Popup);

