import React from 'react';
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import classes from "./MyForm.module.css";
import MyLink from "../link/MyLink";
import {Form} from "react-router-dom";
import MyModal from "../modal/MyModal";


const SignForm = () => {
    return (
        <MyModal>
            <Form className={classes.myForm}>
                Регистрация
                <MyInput type="text" placeholder="Придумайте логин" />
                <MyInput type="text" placeholder="Придумайте пароль" />
                <p>Если у вас уже есть аккаунт, нажмите <MyLink to="/login">сюда</MyLink></p>
                <MyButton>Далее</MyButton>
            </Form>
        </MyModal>
    );
};

export default SignForm;