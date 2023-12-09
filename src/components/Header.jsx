import React from 'react';
import ItmoLogo from "./ITMO-logo";
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <ItmoLogo/>
            <div className="name">Лабораторная работа №4 по Веб-программированию</div>
            <div className="info">Вариант: <b>2334</b><br/>
                Выполнил: <b>Попов Дмитрий Юрьевич</b><br/>
                Группа: <b>P3213</b></div>
        </div>
    );
};

export default Header;