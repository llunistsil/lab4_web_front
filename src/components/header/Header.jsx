import ItmoLogo from "../ITMO-logo";
import classes from './Header.module.css';
import MyButton from "../UI/button/MyButton";
import {Outlet, useNavigate} from "react-router-dom";
import {FaBars} from "react-icons/fa";

const Header = () => {
    const isAuth = !!window.localStorage.getItem("login");
    const navigate = useNavigate()
    return (
        <div className={classes.header}>
            <ItmoLogo className={classes.itmoLogo}/>
            <div className={classes.name}>Лабораторная работа №4 по Веб-программированию</div>
            <div className={classes.feature}>
                {isAuth
                    ?
                    <MyButton  onClick={() => navigate("option")}>
                        <b>Опции <FaBars /></b>
                    </MyButton>
                    :
                    <MyButton  onClick={() => navigate("login")}>
                        <b>Войти / Зарегестрироваться </b>
                    </MyButton>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Header;