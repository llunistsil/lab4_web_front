import React from 'react';
import classes from "./MyForm.module.css";
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";
import MyLink from "../link/MyLink";
import CreateUserForm from "./CreateUserForm";
import {useDispatch} from "react-redux";
import changeForm from "../../../store/actionCreators/changeForm";
const LoginForm = () => {
    const dispatch = useDispatch()
    const toForm = (form) =>{
        dispatch(changeForm(form))
    }

    return (
        <form className={classes.myForm}>
            Вход
            <MyInput type="text" placeholder="Введите логин" />
            <MyInput type="text" placeholder="Введите пароль" />
            <p>Если вы еще не зарегестрированны, нажмите <MyLink onClick={()=> toForm(<CreateUserForm/>)}>сюда</MyLink></p>
            <MyButton>Далее</MyButton>
        </form>
    );
};

export default LoginForm;