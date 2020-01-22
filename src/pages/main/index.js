import React, {useEffect, useState} from "react";
import AppComponent from "../../components/app";
import HeaderComponent from "../../components/header";
import PageComponent from "../../components/page";
import RestaurantComponent from "../../components/restaurant";

function App() {
    const [currentLocation, setCurrentLocation] = useState();
    const [restaurantsAmount, setRestaurantsAmount] = useState(0);
    const [restaurants, setRestaurants] = useState(null);
    const [userName, setUserName] = useState(null);

    function getRestaurants() {
        if (Array.isArray(restaurants)) {
            return restaurants.map(restaurant => {
                return (
                    <RestaurantComponent
                        key={restaurant.id}
                        {...restaurant}
                    />
                )
            });
        }
        return null;
    }

    useEffect(() => {
        fetch('resources/data/user-data.json')
            .then(data => data.json())
            .then(userData => {
                setUserName(userData.name);
            })
            .catch(response => {

            });

        fetch('resources/data/restaurants.json')
            .then(data => data.json())
            .then(response => {
                setCurrentLocation(response.neighborhood);
                setRestaurants(response.restaurants);
                setRestaurantsAmount(response.restaurants.length);
            })
            .catch(response => {

            });
    }, []);

    return (
        <AppComponent>
            <HeaderComponent
                currentLocation={currentLocation}
                userName={userName}
            />
            <PageComponent
                restaurantsAmount={restaurantsAmount}
                restaurants={getRestaurants()}
            />
        </AppComponent>
    );
}

export default App;
