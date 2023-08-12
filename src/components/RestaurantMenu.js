import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import imgSrc from "../assest/img/food.jpg";
import Skimmer from "./Shimmer";

const designMenu = (menuData) => {
  return (
    <div className="menuContainer" key={menuData.itemName}>
      <h1>{menuData.itemName}</h1>
      <img src={imgSrc} />
      <h3>{menuData.price}</h3>
      <h4>{menuData.description}</h4>
    </div>
  );
};

const RestaurantMenu = () => {
  const { id } = useParams();
  const menu = useRestaurant(id);

  return !menu ? (
    <Skimmer />
  ) : (
    <div>
      {menu.map((tempMenu) => {
        return designMenu(tempMenu);
      })}
    </div>
  );
};

export default RestaurantMenu;
