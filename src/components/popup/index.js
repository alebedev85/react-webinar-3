import React from 'react';
import PropTypes from "prop-types";
import './style.css';
import List from "../list";
import Head from "../head";

function Popup({ list, isOpen, onButtonClick, callback }) {

  return (
    <div className={`Popup ${isOpen ? ('Popup_opened') : ''}`} >
      <div className='Popup-container'>
        <Head title='Карзина' >
          <button onClick={onButtonClick}>
            Закрыть
          </button>
        </Head>
        <div className='Popup-body'>
          <List
            list={list}
            callback={callback}
            buttonText='Удалить'
          />
          <div className='Popup-resalt'>
            <div>Итого: </div>
            <div>{`${list.reduce((sum, item) => { return sum + item.count * item.price }, 0).toLocaleString()} ₽`}</div>
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
    count: PropTypes.number,
  })).isRequired,
  callback: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  callback: () => {
  }
}

export default React.memo(Popup);

