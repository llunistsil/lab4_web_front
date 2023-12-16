import ItmoLogo from "../ITMO-logo";
import classes from './Header.module.css';
import MyButton from "../UI/button/MyButton";
import {Outlet, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.header}>
            <ItmoLogo className={classes.itmoLogo}/>
            <div className={classes.name}>Лабораторная работа №4 по Веб-программированию</div>
            <div className={classes.feature}>
                <MyButton  onClick={() => navigate("/login")}>
                    <b>Войти / Зарегестрироваться </b>
                </MyButton>
            </div>
            <Outlet />
        </div>
    );
};

export default Header;