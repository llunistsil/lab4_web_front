const defaultState = {
    modalState: false,
}

export const modalReducer = (state = defaultState,action) => {
    switch (action.type) {
        case("OPEN_MODAL"):
            return {modalState: action.modalState}
        default:
            return state
    }
}