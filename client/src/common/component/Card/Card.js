import React from 'react';
import style from "./Card.module.scss";

const Card = ({card, handleSelect}) => {
    return (
        <button type={"button"} className={`${style.card} ${card.selected ? style.selected : ''}`}
                onClick={() => handleSelect(card)}>
            <input type="radio" onChange={() => {
                handleSelect(card)
            }}
                   checked={card.selected} name={"card"} id={card.cardName}/>
            <img src={card.img} alt=""/>
            <span className={style.cardName}>{card.cardName}</span>
            <span className={style.cardDescription}>{card.cardDescription}</span>
            <span className={style.cardType}>{card.cardType}</span>
            <span className={style.cardEffect}>{card.cardEffect}</span>
        </button>
    );
};

export default Card;