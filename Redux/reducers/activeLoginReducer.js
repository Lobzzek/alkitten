let initialState = {
    item: false,
}
export const activeLoginReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_LOGIN") {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}