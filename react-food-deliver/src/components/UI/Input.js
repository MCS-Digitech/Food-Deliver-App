import React from 'react';
import clasess from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={clasess.input}>
            <label htmlFor={props.input.id}>{props.lable}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
})

export default Input;
