import LoginForm from "../components/UI/form/LoginForm";


const defaultState = {
    form: <LoginForm/>
}


export const formReducer = (state = defaultState,action) => {
    switch (action.type) {
        case("CHANGE_FORM"):
            return {form: action.newForm}
        default:
            return state
    }
}