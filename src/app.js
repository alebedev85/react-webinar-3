import React, { useCallback } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param items {items} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ items, cart }) {

  const list = items.getState().list;

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
    <PageLayout>
      <Head title='Магазин' />
      <Controls />
      <List list={list}
        onAddItem={callbacks.onAddItem} />
    </PageLayout>
  );
}

export default App;
