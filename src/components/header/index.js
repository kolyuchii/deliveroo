import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const HeaderComponent = props => {
  const { userName } = props;
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
    </header>
  );
};

HeaderComponent.propTypes = {
  userName: PropTypes.string,
};

export default HeaderComponent;
