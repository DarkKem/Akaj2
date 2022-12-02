import React, {useContext, useEffect, useState} from 'react';
import GameWrapper from "../../component/GameWrapper/GameWrapper";
import {getAllBoss} from "../../context/Boss/BossActions";
import {toast} from 'react-toastify'
import GameContext from "../../context/Game/GameContext";

const Home = () => {
    const {dispatch, bossList, currentBoss, bossIndex} = useContext(GameContext)
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

        if(bossList.length === bossIndex-1)
        {
            alert("the game is finished")
        }
    }
    return (
        <div>
            <GameWrapper/>
        </div>
    );
};

export default Home;