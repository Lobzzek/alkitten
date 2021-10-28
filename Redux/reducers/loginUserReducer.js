let initialState = {
    item: false,
}
export const loginUserReducer = (state = initialState, action) => {
    if (action.type === "LOGIN_USER") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}