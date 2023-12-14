const openModal= (modal) => {
    return{
        type: "OPEN_MODAL",
        modalState: modal,
    };
}
export default openModal;