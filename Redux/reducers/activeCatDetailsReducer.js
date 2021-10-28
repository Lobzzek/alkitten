let initialState = {
    item: false,
}
export const activeCatDetailsReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_CAT_DETAILS") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}