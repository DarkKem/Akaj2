import React, {createContext, useReducer} from 'react';
import GameReducer from "./GameReducer"

const GameContext = createContext();

export const GameProvider = ({children}) => {


    const initialState = {
        bossList: JSON.parse(localStorage.getItem("bossList")) || [],
        currentBoss: JSON.parse(localStorage.getItem("currentBoss")) || {
            "pv": 100,
            image: ""
        },
        bossIndex: parseInt(localStorage.getItem("bossIndex")) || 0
    }
    const [state, dispatch] = useReducer(GameReducer, initialState)

    // Get user repos

    return <GameContext.Provider
        value={{
            ...state,
            dispatch,
        }}>
        {children}
    </GameContext.Provider>
};
export default GameContext