import React, {useContext, useEffect, useState} from 'react';
import GameWrapper from "../../component/GameWrapper/GameWrapper";
import {getAllBoss} from "../../context/Boss/BossActions";
import {toast} from 'react-toastify'
import GameContext from "../../context/Game/GameContext";
import AuthContext from "../../context/Auth/AuthContext";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const {dispatch, bossList, currentBoss, bossIndex} = useContext(GameContext)
    const {user, dispatchUsr = dispatch} = useContext(AuthContext)
    useEffect(() => {
        const fetchBoss = async () => {
            try {
                const res = await getAllBoss()
                if (res.data.length > 0) {
                    dispatch({type: 'SET_BOSS_LIST', payload: res.data})
                } else {
                    throw Error("Aucun virus n'a été detecté pour le moment..")
                }
            } catch (e) {
                toast.error(e.message)
                console.error(e)
            }
        }
        fetchBoss()
    }, []);
    useEffect(() => {
        dispatch({type: 'SET_CURRENT_BOSS', payload: bossList[bossIndex]})
        dispatch({type: 'SET_BOSS_INDEX', payload: bossIndex})
    }, [bossIndex, bossList]);
    const handleNextFight = () => {
        dispatchUsr({
            type: 'SET_CURRENT_USER', payload: {
                ...user,
                pv: 100
            }
        })
        dispatch({type: 'SET_BOSS_INDEX', payload: bossIndex + 1})
        if (bossIndex >= bossList.length  ) {
            dispatch({type: 'SET_BOSS_INDEX', payload: 0})
            navigate("/Success")
        }


    }
    useEffect(() => {
        if (currentBoss?.pv <= 0) {
            handleNextFight()
        }
        if (user?.pv <= 0) {
            navigate("/game-over")
        }

    }, [user, currentBoss]);
    return (
        <div>
            <GameWrapper/>
        </div>
    );
};

export default Home;