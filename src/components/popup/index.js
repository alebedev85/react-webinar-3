import './Popup.css'
import List from "../list";
import Controls from "../controls";
import Head from "../head";
import React from 'react';

export default function InfoTooltip({ list, isOpen, onClose }) {

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
        <List list={list}
          onAddItem={callbacks.onAddItem} />
      </div>
    </div>
  )
}

