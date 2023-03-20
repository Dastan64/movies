import React from 'react';
import "./Header.scss";
import SearchPanel from "../SearchPanel/SearchPanel";

import logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <figure className="header__logo-container">
                    <img width={64} height={64} src={logo} alt="Логотип сервиса" className="header__logo"/>
                </figure>
                <SearchPanel/>
                <nav className="header__nav">
                    <ul className="header__list list">
                        <li className="list__item"><a href="#" className="list__link">Фильмы</a></li>
                        <li className="list__item"><a href="#" className="list__link">Сериалы</a></li>
                        <li className="list__item"><a href="#" className="list__link">Мультфильмы</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
