import restaurantData from "../constant";
import { useEffect, useState } from "react";
import Skimmer from "./Shimmer";
import imgSrc from "../assest/img/food.jpg"
import { Link } from "react-router-dom";

const RestrauntCard = (restaurantCard) => (
  <Link to = {"/restaurant/"+restaurantCard.name}>
  <div className="card" key={restaurantCard.name}>
    <h3>{restaurantCard.name}</h3>
    <img src={imgSrc} alt="food" />
    <h4>{restaurantCard.dsaditemName}</h4>
    <h4>{restaurantCard.location}</h4>
  </div>
  </Link>
);
const filterData = (restaurantData, searchText) => {
  const filterData = restaurantData.filter((e) => {
    return e.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestraunt] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  async function getDataFromApi() {
    // const api =  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING";
    //   const api = {
    //     method: 'GET',
    // url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/22347',
    // headers: {
    //   'X-RapidAPI-Key': '9969a1ae79mshb6c51681bb5c730p1b961bjsn5c919e761c8e',
    //   'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //   }
    // };
    //   const data = await fetch(api);
    // console.log("yo inside restraunt");
    setAllRestraunt(restaurantData);
    setFilteredRestraunt(restaurantData);
  }

  return allRestaurant?.length == 0 ? (
    <Skimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() =>
            setFilteredRestraunt(filterData(allRestaurant, searchText))
          }
        >
          Search
        </button>
      </div>
      <div className="restraunt">
        {
          filteredRestraunt.length === 0 ? <h1>Not Found</h1> : 
          filteredRestraunt.map((card)=>{return RestrauntCard(card)})
        }
      </div>
    </>
  );
};
export default Body;
