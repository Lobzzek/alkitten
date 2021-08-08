let initialState = {
    item: false,
}
export const trigeredScrollReducer = (state = initialState, action) => {
    if (action.type === "TRIGERED_SCROLL") {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}