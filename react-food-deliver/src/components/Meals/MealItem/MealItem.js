import React, {useContext} from 'react';
import classess from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
const MealItem = (props) => {
    const ctxCart = useContext(CartContext)
    const addToChartHanlder = amount => {
        ctxCart.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return <li>
        <div className={classess.meal}>
            <h3 className={classess.name}>{props.name}</h3>
            <div className={classess.description}>
                {props.description}
            </div>
            {/* <div>{formater.format(props.price)}</div> */}
            <div>{props.price ? props.price : '0'}</div>
        <div>
            <MealItemForm onAddToCart={addToChartHanlder} id={props.id} />
        </div>
        </div>
    </li>;
}

export default MealItem;
