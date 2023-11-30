import React from "react";
import PropTypes, { bool } from 'prop-types';
import './style.css';

function Controls({ onButtonClick, list, disabled }) {
  return (
    <div className='Controls'>
      <div className='Controls-title'>В корзине:</div>
      {list.length > 0 ?
        <div className='Controls-span'>{list.length} товара / {list.reduce((sum, item) => {
          return sum + item.count * item.price}, 0).toLocaleString()} ₽</div> :
        <div className='Controls-span'>пусто</div>}
      <button className='Controls-button' disabled={disabled} onClick={() => onButtonClick()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  disabled: bool
};

Controls.defaultProps = {
  onButtonClick: () => { }
}

export default React.memo(Controls);
