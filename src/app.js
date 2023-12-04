import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from "./components/popup";
import Cart from "./components/cart";

/**
 * Приложение
 * @param items {items} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const [onPopup, setOnPopup] = useState(false);

  const { list, cart } = store.getState();

  const callbacks = {
    onDeleteItem: useCallback((item) => {
      store.deleteItem(item);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addItem(item);
    }, [store])
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
        cart={cart}
        onButtonClick={openPopup}
        disabled={true}
      />
      <List
        list={list}
        callback={callbacks.onAddItem}
        buttonText='Добавить'
      />
      <Popup
        isOpen={onPopup}
      >
        <Cart
          cart={cart}
          closePopup={closePopup}
          callback={callbacks.onDeleteItem} />
      </Popup>
    </PageLayout>
  );
}

export default App;
