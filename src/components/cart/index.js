import React from "react";
import PropTypes from "prop-types";
import Head from "../head";
import List from "../list";
import './style.css';

function Cart({cart, closePopup, callback}) {

  const { totalPrice } = cart;
  const list = Object.values(cart.list).map(el => ({ ...el.item, count: el.count }))

  return (
    <div className='Cart'>
      <Head title='Карзина' >
        <button onClick={closePopup}>
          Закрыть
        </button>
      </Head>
      <div className='Cart-body'>
        <List
          list={list}
          callback={callback}
          buttonText='Удалить'
        />
        <div className='Cart-resalt'>
          <div>Итого: </div>
          <div>{`${totalPrice.toLocaleString()} ₽`}</div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
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
  closePopup: PropTypes.func,
  callback: PropTypes.func,

};

Cart.defaultProps = {
  closePopup: () => { },
  callback: () => { },
}


export default React.memo(Cart);