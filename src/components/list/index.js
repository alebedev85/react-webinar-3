import React from "react";
import PropTypes, { string } from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, callback, buttonText }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item
            item={item}
            callback={callback}
            buttonText={buttonText}
          />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  callback: PropTypes.func,
  buttonText: string
};

List.defaultProps = {
  callback: () => {
  },
}

export default React.memo(List);
