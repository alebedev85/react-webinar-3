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
    onDeleteItem: useCallback((code) => {
      cart.deleteItem(code);
    }, [cart]),

    onAddItem: useCallback((item) => {
      if (cart.findItem(item.title) !== -1) {
        cart.onCounter(item.title)
      } else {
        cart.addItem(item);
      }
      console.log(cart.state.list);
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
        openPopup={openPopup}
      />
      <List list={itemsList}
        onAddItem={callbacks.onAddItem} />
      <Popup
        list={cartList}
        isOpen={onPopup}
        onClose={closePopup}
      />
    </PageLayout>
  );
}

export default App;
