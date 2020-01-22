import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

const AppComponent = props => {
    return (
        <div className="app">
            {props.children}
        </div>
    );
};

AppComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default AppComponent;