import React from "react";
import './styles.scss';

const PageComponent = props => {
    const {
        restaurants,
        restaurantsAmount,
    } = props;
    return (
        <section className="restaurants">
            <div className="restaurants__amount">
                {restaurantsAmount} Restaurants
            </div>
            <article className="restaurants__items">
                {restaurants}
            </article>
        </section>
    );
};

export default PageComponent;