import React from 'react';
import "./Header.scss";
import SearchPanel from "../SearchPanel/SearchPanel";

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <h3>Logo</h3>
                <SearchPanel/>
                <ul className="header__list list">
                    <li className="list__item"><a href="#" className="list__link">Фильмы</a></li>
                    <li className="list__item"><a href="#" className="list__link">Сериалы</a></li>
                    <li className="list__item"><a href="#" className="list__link">Мультфильмы</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
