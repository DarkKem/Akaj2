const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload

            }

        default:
            return state
    }
}
export default AuthReducer;