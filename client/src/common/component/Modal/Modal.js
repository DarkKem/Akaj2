import React, {useState} from 'react';
import style from './Modal.module.scss'

const Modal = ({children, setShowModal, showModal}) => {
    if (!showModal) {
        return;
    }
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                {children}
            </div>

        </div>
    );
};

export default Modal;