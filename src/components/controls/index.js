import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({openPopup}) {
  return (
    <div className='Controls'>
      <h2 className='Controls-title'>В корзине:  <span className='Controls-span'>пусто</span></h2>
      <button onClick={() => openPopup()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => { }
}

export default React.memo(Controls);
