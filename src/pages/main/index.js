import React, { useEffect, useState } from "react";
import AppComponent from "../../components/app";
import HeaderComponent from "../../components/header";
import PageComponent from "../../components/page";
import RestaurantComponent from "../../components/restaurant";

import { USER_DATA_URL, RESTAURANTS_DATA_URL } from "../../config";

function App() {
  const [currentLocation, setCurrentLocation] = useState();
  const [restaurantsAmount, setRestaurantsAmount] = useState(0);
  const [restaurants, setRestaurants] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getRestaurants() {
    if (Array.isArray(restaurants)) {
      return restaurants.map(restaurant => {
        return <RestaurantComponent key={restaurant.id} {...restaurant} />;
      });
    }
    return null;
  }

  useEffect(() => {
    setIsLoading(true);

    // getting the user data
    fetch(USER_DATA_URL)
      .then(data => data.json())
      .then(userData => {
        setUserName(userData.name);
      })
      .catch(response => {});

    // getting the restaurants data
    fetch(RESTAURANTS_DATA_URL)
      .then(data => data.json())
      .then(response => {
        setIsLoading(false);

        // if the restaurants is empty a special page shown
        if (Array.isArray(response.restaurants)) {
          setCurrentLocation(response.neighborhood);
          setRestaurants(response.restaurants);
          setRestaurantsAmount(response.restaurants.length);
        }
      })
      .catch(response => {}); // should send this error to the server and show the explanation
  }, []);

  return (
    <AppComponent>
      <HeaderComponent currentLocation={currentLocation} userName={userName} />
      <PageComponent
        restaurantsAmount={restaurantsAmount}
        restaurants={getRestaurants()}
        isLoading={isLoading}
      />
    </AppComponent>
  );
}

export default App;
