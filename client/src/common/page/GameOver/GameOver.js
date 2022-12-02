import React from 'react';
import style from "./GameOver.module.scss"
import {Link} from "react-router-dom";

const GameOver = () => {
    return (
        <div className={style.container}>
            <h1>Tu as perdu... !</h1>
            <Link to={"/"}>Réessaye en cliquant ici</Link>
        </div>
    );
};

export default GameOver;