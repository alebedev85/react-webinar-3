import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({ openPopup, list }) {
  return (
    <div className='Controls'>
      <h2 className='Controls-title'>В корзине:
        {list.length > 0 ?
          <span className='Controls-span'>{list.length + 1} товара / {list.reduce((sum, item) => {
            return sum + item.count * item.price}, 0)} ₽</span> :
            <span className='Controls-span'> пусто</span>}
      </h2>
      <button onClick={() => openPopup()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => { }
}

export default React.memo(Controls);
