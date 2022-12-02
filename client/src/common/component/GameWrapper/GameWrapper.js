import React, {useContext, useState} from 'react';
import style from './GameWrapper.module.scss'
import Card from "../Card/Card";
import AuthContext from "../../context/Auth/AuthContext";

const GameWrapper = () => {
    const {user} = useContext(AuthContext)
    const cards = [
        {
            img: "/logo192.png",
            cardName: "Le",
            cardDescription: "Lorem ipsum dolor ite sum",
            cardType: "Attaque",
            cardEffect: "-5pv",
            selected: false
        },
        {
            img: "/logo192.png",
            cardName: "Le2",
            cardDescription: "Lorem ipsum dolor ite sum",
            cardType: "Defense",
            cardEffect: "+5pv",
            selected: false
        },
        {
            img: "/logo192.png",
            cardName: "Le3",
            cardDescription: "Lorem ipsum dolor ite sum",
            cardType: "Defense",
            cardEffect: "+5pv",
            selected: false
        },
        {
            img: "/logo192.png",
            cardName: "Le4",
            cardDescription: "Lorem ipsum dolor ite sum",
            cardType: "Defense",
            cardEffect: "+5pv",
            selected: false
        },
        {
            img: "/logo192.png",
            cardName: "Le5",
            cardDescription: "Lorem ipsum dolor ite sum",
            cardType: "Defense",
            cardEffect: "+5pv",
            selected: false
        }
    ]
    const [cardsList, setCardsList] = useState(cards.map((card) => card));
    const handleSelectCard = (cardFromChild) => {
        setCardsList(cardsList.map((cardObject) => ({
                ...cardObject,
                selected: cardObject.cardName === cardFromChild.cardName
            }
        )))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedCard = cardsList.filter((card) => card.selected)[0]
        if (selectedCard) {
            console.log(selectedCard)
            //    KEMO TU FAIS TON CODE ICI

        }

    }
    return (
        <div className={style.container}>
            <div className={style.monsterWrapper}>
                <img src={"/logo192.png"} alt={"monstername"}/>
                <span className={style.monsterName}>monster name</span>
                <span className={style.monsterPV}>PV</span>
                <span className={style.monsterText}>Monster text</span>
            </div>

            <div className={style.userWrapper}>
                <div className={style.userInfosWrapper}>
                    <img src={user.avatar || "/logo192.png"} alt="avatar"/>
                    <div className={style.userPvWrapper}>
                        <span>{user.username}</span>
                        <span>{user.pv}</span>
                    </div>
                </div>
                <form className={style.cardWrapper} onSubmit={handleSubmit}>
                    {cardsList.map((card, key) => (
                        <Card key={key} card={card} handleSelect={handleSelectCard}/>
                    ))}

                    <button type={"submit"}>Jouer cette carte</button>
                </form>
            </div>
            <div className={style.chat}>
                ChatInfos
            </div>
        </div>
    );
};

export default GameWrapper;