import React from "react";
import { plural } from "../../utils";
import PropTypes from "prop-types";
import './style.css';

function Controls({ onButtonClick, cart }) {

  const { totalCount, totalPrice } = cart;


  return (
    <div className='Controls'>
      <div className='Controls-title'>В корзине:</div>
      {totalCount > 0 ?
        <div className='Controls-span'>{totalCount} {plural(totalCount, {
          one: 'товар',
          few: 'товара',
          many: 'товаров'
        })} / {totalPrice.toLocaleString()} ₽</div> :
        <div className='Controls-span'>пусто</div>}
      <button className='Controls-button' disabled={totalCount === 0} onClick={() => onButtonClick()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  cart: PropTypes.shape({
    totalCount: PropTypes.number,
    totalPrice: PropTypes.number,
    list: PropTypes.shape({
      [PropTypes.string]: PropTypes.shape({
        count: PropTypes.number,
        totalPrice: PropTypes.number,
        item: PropTypes.shape({
          code: PropTypes.number,
          price: PropTypes.string,
          title: PropTypes.string,
        }).isRequired
      })
    }).isRequired
  }).isRequired,
  onButtonClick: PropTypes.func,
};

Controls.defaultProps = {
  onButtonClick: () => { }
}

export default React.memo(Controls);
