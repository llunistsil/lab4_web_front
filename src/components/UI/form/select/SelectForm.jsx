import React from 'react';
import classes from "../MyForm.module.css";
import MyButton from "../../button/MyButton";
import {Form} from "react-router-dom";
import CheckBoxes from "../../../checkboxContainer/CheckBoxes";
import {useDispatch, useSelector} from "react-redux";
import MyInput from "../../input/MyInput";
import { Toaster} from "react-hot-toast";
import {addDot} from "../../../../utils/requests/addDotRequest";
import {changeR, changeX, changeY} from "../../../../utils/setCoords/setCoords";
import {clearRequest} from "../../../../utils/requests/clearRequest";

const SelectForm = () => {
    const coords = useSelector(state => state.coords)
    const dispatch = useDispatch()
    return (
        <Form className={classes.myForm}>
            Введите координаты
            <CheckBoxes id="x" changeCoord={e =>changeX(e,dispatch)} checkboxes={[-5,-4,-3,-2,-1,0,1,2,3]}>Выберите X :</CheckBoxes>
            <CheckBoxes id="r" changeCoord={e =>changeR(e,dispatch)} checkboxes={[-5,-4,-3,-2,-1,0,1,2,3]}>Выберите радиус :</CheckBoxes>
            <MyInput onChange={(e) => changeY(e.target.value,dispatch)} type="text" placeholder="Введите Y"/>   {//TODO
            }
            <div className={classes.btns}>
                <MyButton onClick={()=> addDot(dispatch,coords.x,coords.y,coords.r)}>Отправить</MyButton>
                <MyButton  onClick={()=> clearRequest(dispatch)}>Очистить</MyButton>
            </div>
            <Toaster/>
        </Form>
    );
};

export default SelectForm;