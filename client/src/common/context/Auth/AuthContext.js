import React, {createContext, useReducer} from 'react';
import AuthReducer from "./AuthReducer"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {


        const initialState = {
            user: JSON.parse(localStorage.getItem("user")) || {
                username: '',
                avatar: '',
                pv: 100,
                state: '',
            },

        }
        const [state, dispatch] = useReducer(AuthReducer, initialState)

// Get user repos

        return <AuthContext.Provider
            value={{
                ...state,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    }
;
export default AuthContext