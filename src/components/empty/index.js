import React from "react";
import './styles.scss';

const EmptyComponent = () => {
    return (
        <div className="empty">
            <h1 className="empty__title">No restaurants match those filters</h1>
            <div className="empty__description">Try removing one or two filters</div>
            <button className="empty__button">Clear all filters</button>
        </div>
    );
};

export default EmptyComponent;