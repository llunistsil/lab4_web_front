import {combineReducers, createStore} from 'redux';
import {formReducer} from "./formReducer";
import {modalReducer} from "./modalReducer";

const rootReducer = combineReducers({
    formReducer,modalReducer
})

const store = createStore(rootReducer);

export default store;