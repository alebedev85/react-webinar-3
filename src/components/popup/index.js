import './Popup.css'
import List from "../list";
import Head from "../head";
import React from 'react';

export default function Popup({ list, isOpen, onClose }) {

  const callbacks = {
    onAddItem: (item) => {
      if (cart.findItem(item.title) !== -1) {
        cart.onCounter(item.title)
      } else {
        cart.addItem(item);
      }
      console.log(cart.state.list);
    }
  }

  return (
    <div className={`popup ${isOpen ? ('popup_opened') : ''}`} >
      <div className='popup-container'>
        <Head title='Карзина' >
          <button onClick={onClose}>
            Закрыть
          </button>
        </Head>
        <div className='popup-body'>
          <List list={list}
            onAddItem={callbacks.onAddItem} />
          <div className='popup-resalt'>
            <span>Итого: </span>
            <span>{list.reduce((sum, item) => { return sum + item.count * item.price }, 0)} ₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}

