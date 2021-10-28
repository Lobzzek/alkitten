let initialState = {
    item: false,
}
export const activeChatsReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_CHATS") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}