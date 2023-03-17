import React from 'react';
import "./Popup.scss";
import { PopupProps } from "./types";
import classNames from "classnames";

const Popup = ({ isOpen, onClose }: PopupProps) => {
    const popupClass = classNames({
        'popup_open': isOpen,
        'popup_hidden': !isOpen,
    })

    return (
        <div className={`popup ${popupClass}`} onClick={onClose}>
            <div className="popup__content" onClick={(event) => event.stopPropagation()}>
                <p>Lorem*20</p>
                <button className="popup__close-btn" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="#fff" width={32} height={32}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Popup;
