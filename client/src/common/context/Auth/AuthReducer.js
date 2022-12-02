const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_CHAT':
            localStorage.setItem("user", JSON.stringify({
                username: action.payload?.username,
                avatar: action.payload?.avatar
            }))
            localStorage.setItem("avatar", JSON.stringify(action.payload?.avatar))
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        default:
            return state
    }
}
export default AuthReducer;