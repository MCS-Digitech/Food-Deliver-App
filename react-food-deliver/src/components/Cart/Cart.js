import React, { useState, useContext } from 'react';
import classess from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import { Currency } from '../../Helpers/Formater/Currency';

const Cart = (props) => {
    const ctxItems = useContext(CartContext)
    console.log(ctxItems)
    const totalItem = `${ctxItems.totalAmount}`
    const isOrder = ctxItems?.item?.length > 0
    const cartItemRemoveHandler = () => {

    }
    const cartItemAddHandler = (item) => {
        ctxItems.addItem(item)
    }
    const cartItem = (
        <ul className={classess['cart-items']}>
            {
               ctxItems?.item?.map((item) => (
                <CartItem 
                key={item.key} 
                name={item.name} 
                amount={item.amount} 
                price={Currency(item.price)} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                onAdd={cartItemAddHandler.bind(null, item)} />
               ))
            }
        </ul>
    )
    return (<Modal onHide={props.onHide}>
        {cartItem}
            <div className={classess.total}>
                <span>Total Amount</span>
                <span>{totalItem}</span>
            </div>
            <div className={classess.actions}>
                <button className={classess['button--alt']} onClick={props.onHide}>Close</button>
                {isOrder && (
                <button className={classess.button}>Order</button>
                )}
            </div>
        </Modal>)
}

export default Cart;
