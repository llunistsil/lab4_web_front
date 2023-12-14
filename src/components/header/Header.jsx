import ItmoLogo from "../ITMO-logo";
import classes from './Header.module.css';
import MyModal from "../UI/modal/MyModal";
import MyButton from "../UI/button/MyButton";
import RootForm from "../UI/form/RootForm";
import {useDispatch, useSelector} from "react-redux";
import openModal from "../../store/actionCreators/openModal";

const Header = () => {
    const modalActive = useSelector(state => state.modalReducer.modalState)
    const dispatch = useDispatch()
    const setModal = (active) =>{
        dispatch(openModal(active))
    }
    return (
        <div className={classes.header}>
            <ItmoLogo className={classes.itmoLogo}/>
            <div className={classes.name}>Лабораторная работа №4 по Веб-программированию</div>
            <div className={classes.feature}>
                <MyButton  onClick={() => setModal(true)}>
                    <b>Войти / Зарегестрироваться </b>
                </MyButton>
            </div>
            <MyModal active={modalActive} setActive={setModal}>
                <RootForm/>
            </MyModal>
        </div>
    );
};

export default Header;