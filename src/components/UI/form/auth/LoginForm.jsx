import React, {useEffect, useState} from 'react';
import classes from "../MyForm.module.css";
import MyInput from "../../input/MyInput";
import MyButton from "../../button/MyButton";
import MyLink from "../../link/MyLink";
import {Form, useNavigate} from "react-router-dom";
import MyModal from "../../modal/MyModal";
import {useDispatch} from "react-redux";
import {toast, Toaster} from "react-hot-toast";
import {logInRequest} from "../../../../utils/requests/logInRequest";


const LoginForm = () => {
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=> {
        if(window.localStorage.getItem("login")){
            navigate("/~s368679/main")
        }
    },[])
    return (
        <MyModal location="/~s368679/" toast={toast}>
            <Form className={classes.myForm}>
                Вход
                <MyInput onChange={e => setNewLogin(e.target.value)} type="text" placeholder="Введите логин" />
                <MyInput onChange={e => setNewPassword(e.target.value)} type="text" placeholder="Введите пароль" />
                <p>Если вы еще не зарегестрированны, нажмите <MyLink to="/~s368679/sign" onClick={() => toast.remove()}>сюда</MyLink></p>
                <MyButton onClick={e => {
                    e.preventDefault();
                    logInRequest(dispatch,navigate,newLogin,newPassword);
                    }}>Далее</MyButton>
            </Form>
            <Toaster/>
        </MyModal>
    );
};

export default LoginForm;