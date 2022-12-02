import React from 'react';
import style from "./Card.module.scss";

const Card = ({card, handleSelect}) => {
    return (
        <button type={"button"} className={`${style.card} ${card.selected ? style.selected : ''}`}
                onClick={() => handleSelect(card)}>
            <input type="radio" onChange={() => {
                handleSelect(card)
            }}
                   checked={card.selected} name={"card"} id={card.name.replaceAll(" ", '')}/>
            <span className={style.cardName}>{card.name}</span>
            <span className={style.cardDescription}>{card.description}</span>
            <span className={style.cardType}>{card.type}</span>
        </button>
    );
};

export default Card;