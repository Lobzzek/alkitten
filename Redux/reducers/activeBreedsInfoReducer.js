let initialState = {
    item: [],
}
export const activeBreedsInfoReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_BREEDS") {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}