import restaurantData from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import imgSrc from "../assest/img/food.jpg";
import { Link } from "react-router-dom";
import checkOnline from "../utils/checkOnline";
import Search from "./Search";

const RestaurantCard = (restaurantCard) => (
  <div
    key={restaurantCard.name}
    className="flex justify-center m-3 p-2 w-56 shadow-lg bg-not-so-yellow text-fefe font-semibold flex-col text-center rounded-lg"
  >
    <img className="rounded-lg" src={imgSrc} alt="food" />
    <h3 className="font-bold">{restaurantCard.name}</h3>
    <Link to={"/restaurant/" + restaurantCard.name}>
      <h4>{restaurantCard.dsaditemName}</h4>
      <h4>{restaurantCard.location}</h4>
    </Link>
  </div>
);

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const isOnline = checkOnline();

  useEffect(() => {
    getDataFromApi();
  }, []);

  async function getDataFromApi() {
    // @todo fetch restaraunt from backend
    setAllRestaurant(restaurantData);
    setFilteredRestaurant(restaurantData);
  }

  if (!isOnline) return <>Network Error! Check your internet connection</>;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-28">
      <Search
        setFilteredRestaurant={setFilteredRestaurant}
        allRestaurant={allRestaurant}
      />
      <div className="restaurant flex flex-wrap m-8">
        {filteredRestaurant.length === 0 ? (
          <h1>Not Found</h1>
        ) : (
          filteredRestaurant.map((card) => {
            return RestaurantCard(card);
          })
        )}
      </div>
    </div>
  );
};

export default Body;
