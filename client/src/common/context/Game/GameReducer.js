const GameReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_BOSS':
            localStorage.setItem("currentBoss", JSON.stringify(action.payload || {}))
            return {
                ...state,
                currentBoss: action.payload
            }
        case 'SET_BOSS_LIST':
            localStorage.setItem("bossList", JSON.stringify(action.payload))
            return {
                ...state,
                bossList: action.payload
            }
        case 'SET_BOSS_INDEX':
            localStorage.setItem("bossIndex", JSON.stringify(action.payload))
            return {
                ...state,
                bossIndex: action.payload
            }
        default:
            return state
    }
}
export default GameReducer;