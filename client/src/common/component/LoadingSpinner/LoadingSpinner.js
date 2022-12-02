import React from 'react';
import style from "./LoadingSpinner.module.scss"

const LoadingSpinner = () => {
    return (
        <div className={style.container}>
            <span className={style.loader}/>
        </div>
    );
};

export default LoadingSpinner;