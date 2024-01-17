import React, {useEffect} from 'react';
import Header from "../../components/header/Header";
import RootChart from "../../components/chart/RootChart";
import classes from "./Main.module.css";
import SelectForm from "../../components/UI/form/select/SelectForm";
import {useNavigate} from "react-router-dom";
import MyTable from "../../components/table/MyTable";
import {getDots} from "../../utils/requests/getDotsRequest";
import {useDispatch} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {
        if(!window.localStorage.getItem("login")){
            navigate("~s368679/")
        }
        getDots(dispatch)
    },[])
    return (
        <div className={classes.body}>
            <Header/>
            <div className={classes.main}>
                <div className={classes.chart}>
                    <RootChart/>
                </div>
                <div className={classes.form}>
                    <SelectForm/>
                </div>
            </div>
            <MyTable/>
        </div>
    );
};

export default Main;