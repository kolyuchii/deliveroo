import React from "react";
import './styles.scss';

const AppComponent = props => {
    return (
        <div className="app">
            {props.children}
        </div>
    );
};

export default AppComponent;