import restaurantData from "../constant";
import { useState } from "react";
import Search from "./search";

const RestrauntCard = (restaurantCard) => (
    <div className="card">
<h3>{restaurantCard.name}</h3>
<img src = {restaurantCard.foodImgSrc} alt = "food"/>
<h4>{restaurantCard.dsaditemName}</h4>
<h4>{restaurantCard.location}</h4>
    </div>
);

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestraunt] = useState(restaurantData);    
  return (
  <>
  <Search text = {searchText} rest = {restaurant}/> 
    <div className="restraunt">
        {restaurant.map((card)=>{ 
            return RestrauntCard(card)})
        }
    </div>
  </>
  )
}
export default Body;