import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const HeaderComponent = props => {
  const { currentLocation, userName } = props;
  return (
    <header className="header">
      <div className="header__top-part">
        <a className="header__logo" href="/">
          Deliveroo
        </a>
        <a className="header__user" href="/">
          <span className="header__user-name">{userName}</span>
        </a>
      </div>
      <div className="location">
        <div className="location__info">
          <h4 className="location__info-title">Location</h4>
          <h1 className="location__info-current">{currentLocation}</h1>
        </div>
        <div>
          <button className="location__button-change">Change location</button>
        </div>
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
  currentLocation: PropTypes.string,
  userName: PropTypes.string,
};

export default HeaderComponent;
