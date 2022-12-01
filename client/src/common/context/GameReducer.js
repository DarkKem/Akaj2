const GameReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_CHAT':
            localStorage.setItem("currentGame", JSON.stringify(action.payload))
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default GameReducer;