import React from 'react';
import {Form, useNavigate} from "react-router-dom";
import classes from "../MyForm.module.css";
import MyButton from "../../button/MyButton";
import MyModal from "../../modal/MyModal";
import {useDispatch} from "react-redux";
import {deleteUserRequest} from "../../../../utils/requests/deleteUserRequest";


const OptionForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    return (
        <MyModal location={-1}>
            <Form className={classes.myForm}>
                Хотите:
                <div className={classes.btns}>
                    <MyButton onClick={e => {
                        e.preventDefault();
                        deleteUserRequest(dispatch,navigate)
                    }}>Удалить аккаунт</MyButton>
                    <MyButton onClick={() => {
                        window.localStorage.clear()
                        navigate("/~s368679/")
                    }}>Выйти из аккаунта</MyButton>
                </div>
            </Form>
        </MyModal>
    );
};

export default OptionForm;