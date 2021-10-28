let initialState = {
    item: false,
}
export const activeMapReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_MAP") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}