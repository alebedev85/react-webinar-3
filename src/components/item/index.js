import './style.css';
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from "../../utils";

function Item(props) {

  const cn = bem('Item');

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item._id)
  }

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>
        <Link to={`/product/${props.item._id}`} className={cn("link")}>
          {props.item.title}
        </Link>
      </div>
      <div className={cn('actions')}>
        <div className={cn('price')}>{numberFormat(props.item.price)} ₽</div>
        <button onClick={callbacks.onAdd}>{props.textButton}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
  textButton: PropTypes.string
};

Item.defaultProps = {
  onAdd: () => { },
}

export default memo(Item);
