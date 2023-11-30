import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  const callbacks = {
    onButtonClick: (e) => {
      e.stopPropagation();
      props.callback(props.item);
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
        {`${props.item.price.toLocaleString()} ₽`}
      </div>
      {props.item.count ? <div className='Item-amount'>
        {`${props.item.count} шт`}</div> :
        <></>}
      <div className='Item-actions'>
        <button onClick={callbacks.onButtonClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  callback: PropTypes.func,
};

Item.defaultProps = {
  callback: () => {
  }
}

export default React.memo(Item);
