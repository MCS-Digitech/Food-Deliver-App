import React, {Fragment} from 'react';
import  ReactDOM from 'react-dom';
import clasess from './Modal.module.css'
const Backdrop = props => {
    return <div className={clasess.backdrop} onHide={props.onHide}></div>
}
const Modalverlay = props => {
    return <div className={clasess.modal}>
        <div className={clasess.content}>{props.children}</div>
    </div>
}
const protalElement = document.getElementById('overlays')
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHide} />, protalElement)}
            {ReactDOM.createPortal(
            <Modalverlay>
                {props.children}
            </Modalverlay>, protalElement)}
        </Fragment>
    );
}

export default Modal;
