const GameReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_BOSS':
            localStorage.setItem("boss", action.payload)
            return {

                boss: action.payload
            }
        default:
            return state
    }
}
export default GameReducer;