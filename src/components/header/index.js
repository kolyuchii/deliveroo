import React from "react";
import './styles.scss';

const HeaderComponent = props => {
    const {
        currentLocation,
        userName
    } = props;
    return (
        <header className="header">
            <div className="header__top-part">
                <a className="header__logo" href="/" />
                <a className="header__user" href="/">
                    <span className="header__user-name">{userName}</span>
                </a>
            </div>
            <div className="location">
                <div className="location__info">
                    <h4 className="location__info-title">Location</h4>
                    <h1 className="location__info-current">{currentLocation}</h1>
                </div>
                <button className="location__button-change">Change location</button>
            </div>
        </header>
    );
};

export default HeaderComponent;