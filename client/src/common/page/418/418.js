import React from 'react';
import { robotTXT } from '../../utils/HonneyPot';
import style from './418.module.scss'
const err418 = () => {
    robotTXT()
    return (
        <div className={style.container}>
            <p className={style.para}>Look like you're lost in Honey</p>
            <h1>418</h1>
        </div>
    );
};

export default err418;