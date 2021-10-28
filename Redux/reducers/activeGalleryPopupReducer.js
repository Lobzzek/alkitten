let initialState = {
    item: false,
}
export const activeGalleryPopupReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_GALLERY_POPUP") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}