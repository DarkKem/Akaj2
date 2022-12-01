import React, {createContext, useReducer} from 'react';
import GameReducer from "./GameReducer"

const GameContext = createContext();

export const GameProvider = ({children}) => {


    const initialState = {
        currentGame: localStorage.getItem("currentGame") || {},

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