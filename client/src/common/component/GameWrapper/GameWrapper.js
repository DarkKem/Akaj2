import React, {useContext, useState} from 'react';
import style from './GameWrapper.module.scss'
import Card from "../Card/Card";
import AuthContext from "../../context/Auth/AuthContext";
import GameContext from "../../context/Game/GameContext";
import Modal from "../Modal/Modal";
import heart from "../../assets/icons/heart.svg"

const GameWrapper = () => {
    const {user} = useContext(AuthContext)
    const {boss} = useContext(GameContext)
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
    const [showModal, setShowModal] = useState(false);
    const [showMonsterModal, setShowMonsterModal] = useState(false)
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
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleCloseMonsterModal = () => {
        setShowMonsterModal(false)
    }
    const handleNext = () => {
    }
    return (
        <div className={style.container}>
            <div className={style.monsterWrapper}>
                <img src={"/virus/virus(1).png"} alt={"monstername"}/>
                <span className={style.monsterPV} style={{backgroundImage: `url(${heart}`}}>PV</span>
                <button type={"button"} onClick={() => setShowMonsterModal(true)}
                        className={style.monsterButton}>?
                </button>
                <div className={style.monsterInfosWrapper}>
                    <span className={style.monsterName}>monster name</span>

                </div>
                <Modal setShowModal={setShowMonsterModal} showModal={showMonsterModal}>
                    <div className={style.wrapperText}>
                        <span className={style.monsterName}>monster name</span>
                        <span className={style.monsterText}>Monster description</span>
                    </div>
                    <div className={style.wrapperButton}>
                        <button type={"button"} className={`${style.cancelButton}`}
                                onClick={handleCloseMonsterModal}>Cancel
                        </button>
                    </div>
                </Modal>
            </div>

            <div className={style.userWrapper}>
                <div className={style.userInfosWrapper}>
                    <img src={user.avatar || "/logo192.png"} alt="avatar"/>
                    <span className={style.userPv} style={{backgroundImage: `url(${heart}`}}>{user.pv}</span>
                    <span className={style.userUsername}>{user.username}</span>
                </div>
                <form className={style.formCardWrapper} onSubmit={handleSubmit}>
                    <div className={style.cardWrapper}>
                        {cardsList.map((card, key) => (
                            <Card key={key} card={card} handleSelect={handleSelectCard}/>
                        ))}

                    </div>
                    <button type={"submit"}>Jouer cette carte</button>
                </form>
            </div>
            <div className={style.chat}>
                ChatInfos
            </div>
            <Modal setShowModal={setShowModal} showModal={showModal}>
                <div className={style.wrapperText}>
                    VictoryMessage
                </div>
                <div className={style.wrapperButton}>
                    <button type={"button"} className={style.cancelButton} onClick={handleCloseModal}>Cancel</button>
                    <button type={"button"} onClick={handleNext}>Suivant</button>
                </div>
            </Modal>
        </div>
    );
};

export default GameWrapper;