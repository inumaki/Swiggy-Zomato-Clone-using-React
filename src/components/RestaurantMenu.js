import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import imgSrc from "../assest/img/food.jpg";
import Skimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const MAX_DESCRIPTION_LENGTH = 31; // Maximum length of the description before truncation

const designMenu = (menuData, addData) => {
  const truncatedDescription =
    menuData.description.length > MAX_DESCRIPTION_LENGTH
      ? `${menuData.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : menuData.description;
  return (
    <div
      className="m-4 p-2 w-1/6  rounded-lg shadow-xl bg-not-so-yellow text-white font-semibold flex flex-col"
      key={menuData.itemName}
    >
      <img
        src={imgSrc}
        alt={menuData.itemName}
        className="w-full h-auto mb-1 rounded-lg"
        style={{ objectFit: "cover" }} // Make the image touch the border
      />
      <div className="flex justify-between">
        <h3 className="text-sm mb-1">{menuData.itemName}</h3>
        <h3 className="text-sm mb-1">${menuData.price}</h3>
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 w-14 rounded-full transition-colors duration-300"
        onClick={() => {
          console.log("not wrk")
          addData(menuData);
        }}
      >
        +Add
      </button>
      <p className="text-sm">{truncatedDescription}</p>
    </div>
  );
};

const RestaurantMenu = () => {
  const { id } = useParams();
  const itemMenu = useRestaurant(id);
  const dispatch = useDispatch();
  const addItem = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };

  return !itemMenu ? (
    <Skimmer />
  ) : (
<div className="flex pt-28">

  <div className="flex-1">
    {itemMenu.menu.map((tempMenu) => {
      return designMenu(tempMenu, addItem);
    })}
  </div>
</div>


  );
};
export default RestaurantMenu;
