import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const LocationComponent = props => {
    const { currentLocation } = props;
    return (
        <div className="location">
            <div className="location__container">
                <div className="location__info">
                    <h4 className="location__info-title">Location</h4>
                    <h1 className="location__info-current">{currentLocation}</h1>
                </div>
                <div>
                    <button className="location__button-change">Change location</button>
                </div>
            </div>
        </div>
    );
};

LocationComponent.propTypes = {
    currentLocation: PropTypes.string,
};

export default LocationComponent;
