import React, {useRef, useState} from 'react';
import classess from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true)
    const amountInputRef = useRef(0)
    const submitHandler = (event) => {
        event.preventDefault()
        const enterAmount = amountInputRef.current.value;
        const enterAmountNum = +enterAmount;

        if(enterAmount.trim().length === 0 || enterAmountNum < 1 || enterAmountNum > 5){
            setAmountValid(false)
            return
        }
        props.onAddToCart(enterAmountNum)
    }
    return <form className={classess.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
           id: 'amount_' + props.id,
           type: 'number',
           min: '1',
           max: '5',
           step: '1',
           defaultValue: '1',
        }} />
        <button>+Add</button>
        {
            !amountValid && (<h2>Plaase input valid amount</h2>)
        }
    </form>;
} 

export default MealItemForm;
