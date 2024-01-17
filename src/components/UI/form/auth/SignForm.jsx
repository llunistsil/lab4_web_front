import React, {useEffect, useState} from 'react';
import MyButton from "../../button/MyButton";
import MyInput from "../../input/MyInput";
import classes from "../MyForm.module.css";
import MyLink from "../../link/MyLink";
import {Form, useNavigate} from "react-router-dom";
import MyModal from "../../modal/MyModal";
import {useDispatch} from "react-redux";
import {toast, Toaster} from "react-hot-toast";

import {signUpRequest} from "../../../../utils/requests/signUpRequest";


const SignForm = () => {
    const [newLogin, setNewLogin] = useState(""), [newPassword, setNewPassword] = useState(""),
        navigate = useNavigate(), dispatch = useDispatch();
    useEffect(() => {
        if (window.localStorage.getItem("login")) {
            navigate("/~s368679/main")
        }
    }, [dispatch, navigate])
    return (
        <MyModal location="/~s368679/" toast={toast}>
            <Form onSubmit={e => {
                e.preventDefault();
                signUpRequest(dispatch, navigate, newLogin, newPassword)}
            } className={classes.myForm}>
                Регистрация
                <MyInput onChange={e => setNewLogin(e.target.value)} type="text" placeholder="Придумайте логин"/>
                <MyInput onChange={e => setNewPassword(e.target.value)} type="text" placeholder="Придумайте пароль"
                />
                <p>Если у вас уже есть аккаунт, нажмите <MyLink to="/~s368679/login" onClick={() => toast.remove()}>сюда</MyLink>
                </p>
                <MyButton>
                    Далее
                </MyButton>
            </Form>
            <Toaster/>
        </MyModal>
    );
};

export default SignForm;