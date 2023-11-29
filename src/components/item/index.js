import React, { useState } from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  const callbacks = {
    onAddItem: (e) => {
      e.stopPropagation();
      props.onAddItem(props.item);
    }
  }

  return (
    <div className={'Item'}
      onClick={callbacks.onClick}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-price'>
        {props.item.price}₽
      </div>
      <div className='Item-actions'>
        <button onClick={callbacks.onAddItem}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onDelete: () => {
  },
  onSelect: () => {
  },
}

export default React.memo(Item);
