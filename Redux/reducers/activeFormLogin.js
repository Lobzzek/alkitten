let initialState = {
    item: false,
}
export const activeFormLoginReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_FORM") {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}
