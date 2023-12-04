import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.sum = 0;
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   * * @param item
   */
  addItem(item) {
    const { totalPrice, totalCount, list } = this.state.cart;
    const { code, price } = item;
    const hasInCart = list.hasOwnProperty(code);

    const newCart = {
      totalPrice: totalPrice + price,
      totalCount: hasInCart ? totalCount: totalCount + 1,
      list: {
        ...list,
        [code]: {
          count: hasInCart ? list[code].count + 1 : 1,
          totalPrice: hasInCart ? list[code].totalPrice + price : price,
          item
        }
      }
    };

    this.setState({ ...this.state, cart: newCart });
  };


  /**
   * Удаление записи по коду
   * @param item
   */
  deleteItem(item) {
    const { code } = item;
    const { cart } = this.state;
    const { totalCount, totalPrice, list } = cart;

    const newTotalPrice = totalPrice - item.price;
    const newTotalCount = totalCount - list[code].count;

    delete list[code];

    const newCart = {
      ...cart,
      totalCount: newTotalCount,
      totalPrice: newTotalPrice,
      list: { ...list }
    };

    this.setState({ ...this.state, cart: newCart });
  };
}

export default Store;
