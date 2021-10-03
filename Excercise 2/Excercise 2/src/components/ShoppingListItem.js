import React from "react";
import styles from './ShoppingListItem.module.css';
import cx from 'classnames';

//Tämä cx classnames ei toiminut

/* Shopping list item */
const ShoppingListItem = props => {
  return <li className="item">
    <div className="item">
      <div className="itemQtyUnit flex">
        { props.qty }
      </div>
      <div className="itemQtyUnit flex">
        { props.unit }
      </div>
    </div>
    <div className="flex">
      { props.value}
    </div>
  </li>
}

export default ShoppingListItem;