let initialState = {
    item: false,
}
export const activeCatteryDetailsReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_CATTERY_DETAILS") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}