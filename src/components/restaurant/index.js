import React from "react";
import "./styles.scss";
import { CURRENCY_SYMBOL } from "../../config";
import PropTypes from "prop-types";

const RestaurantComponent = props => {
  const { name, image, url, price, tags } = props;

  function getTags() {
    const result = tags.slice(0);
    result.push(CURRENCY_SYMBOL.repeat(price));
    return result.join(" • ");
  }

  return (
    <figure className="restaurant">
      <a className="restaurant__link" href={url} title={name}>
        <img className="restaurant__img" src={image} alt={name} />
        <div className="restaurant__info">
          <div className="restaurant__info-name">{name}</div>
          <div className="restaurant__info-tags">{getTags()}</div>
        </div>
      </a>
    </figure>
  );
};

RestaurantComponent.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
  tags: PropTypes.array
};

export default RestaurantComponent;
