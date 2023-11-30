import React from 'react';
import PropTypes from "prop-types";
import './Popup.css'
import List from "../list";
import Head from "../head";

function Popup({ list, isOpen, onClose, callback }) {

  return (
    <div className={`popup ${isOpen ? ('popup_opened') : ''}`} >
      <div className='popup-container'>
        <Head title='Карзина' >
          <button onClick={onClose}>
            Закрыть
          </button>
        </Head>
        <div className='popup-body'>
          <List
            list={list}
            callback={callback}
            buttonText='Удалить'
          />
          <div className='popup-resalt'>
            <span>Итого: </span>
            <span>{list.reduce((sum, item) => { return sum + item.count * item.price }, 0)} ₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Popup.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  callback: PropTypes.func,
};

Popup.defaultProps = {
  callback: () => {
  }
}

export default React.memo(Popup);

