import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './headerbutton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx?.item?.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems ? numberOfCartItems : 0}</span>
    </button>
  );
};

export default HeaderCartButton;