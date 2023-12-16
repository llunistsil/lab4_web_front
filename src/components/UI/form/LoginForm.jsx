import React from 'react';
import classes from "./MyForm.module.css";
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";
import MyLink from "../link/MyLink";
import {Form} from "react-router-dom";
import MyModal from "../modal/MyModal";
const LoginForm = () => {

    return (
        <MyModal>
            <Form className={classes.myForm}>
                Вход
                <MyInput type="text" placeholder="Введите логин" />
                <MyInput type="text" placeholder="Введите пароль" />
                <p>Если вы еще не зарегестрированны, нажмите <MyLink to="/sign">сюда</MyLink></p>
                <MyButton>Далее</MyButton>
            </Form>
        </MyModal>
    );
};

export default LoginForm;