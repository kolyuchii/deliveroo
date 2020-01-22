import React from "react";
import "./styles.scss";
import LoadingComponent from "../loading";
import EmptyComponent from "../empty";
import PropTypes from "prop-types";

const PageComponent = props => {
  const { restaurants, restaurantsAmount, isLoading } = props;

  // Show the loading page
  if (isLoading) {
    return (
      <section className="restaurants">
        <LoadingComponent />
      </section>
    );

  // show the restaurants page
  } else if (restaurants && restaurants.length > 0) {
    return (
      <section className="restaurants">
        <div className="restaurants__amount">
          {restaurantsAmount} Restaurants
        </div>
        <article className="restaurants__items">{restaurants}</article>
      </section>
    );
  }

  // show an "empty" page by default
  return <EmptyComponent />;
};

PageComponent.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantsAmount: PropTypes.number,
  isLoading: PropTypes.bool
};

export default PageComponent;
