import React from 'react';
import MyButton from "../button/MyButton";
import LoginForm from "./LoginForm";
import MyInput from "../input/MyInput";
import classes from "./MyForm.module.css";
import MyLink from "../link/MyLink";
import {useDispatch} from "react-redux";
import changeForm from "../../../store/actionCreators/changeForm";

const CreateUserForm = () => {
    const dispatch = useDispatch()
    const toForm = (form) =>{
        dispatch(changeForm(form))
    }
    return (
        <form className={classes.myForm}>
            Регистрация
            <MyInput type="text" placeholder="Придумайте логин" />
            <MyInput type="text" placeholder="Придумайте пароль" />
            <p>Если у вас уже есть аккаунт, нажмите <MyLink onClick={() => toForm(<LoginForm/>)}>сюда</MyLink></p>
            <MyButton>Далее</MyButton>
        </form>
    );
};

export default CreateUserForm;