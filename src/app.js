import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from "./components/popup";

/**
 * Приложение
 * @param items {items} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ items, cart }) {

  const [onPopup, setOnPopup] = useState(false);

  const itemsList = items.getState().list;
  const cartList = cart.getState().list;

  const callbacks = {
    onDeleteItem: useCallback((item) => {
      cart.deleteItem(item.code);
    }, [cart]),

    onAddItem: useCallback((item) => {
      if (cart.findItem(item.title) !== -1) {
        cart.onCounter(item.title)
      } else {
        cart.addItem(item);
      }
    }, [cart])
  }

  function openPopup() {
    setOnPopup(true);
  }

  function closePopup() {
    setOnPopup(false);
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls
        list={cartList}
        onButtonClick={openPopup}
        disabled={cartList.length === 0}
      />
      <List
        list={itemsList}
        callback={callbacks.onAddItem}
        buttonText='Добавить'
      />
      <Popup
        isOpen={onPopup}
      >
        <Head title='Карзина' >
          <button onClick={closePopup}>
            Закрыть
          </button>
        </Head>
        <div className='Popup-body'>
          <List
            list={cartList}
            callback={callbacks.onDeleteItem}
            buttonText='Удалить'
          />
          <div className='Popup-resalt'>
            <div>Итого: </div>
            <div>{`${cartList.reduce((sum, item) => { return sum + item.count * item.price }, 0).toLocaleString()} ₽`}</div>
          </div>
        </div>
      </Popup>
    </PageLayout>
  );
}

export default App;
