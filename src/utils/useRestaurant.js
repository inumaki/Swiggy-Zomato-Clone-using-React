import { useState, useEffect } from "react";
import restaurantData from "../constant";

const useRestaurant = (id) => {
  const [menu, setMenu] = useState(null);   
  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    for (const item of restaurantData) {
      if (item.name.toLowerCase().includes(id.toLowerCase())) {
        setMenu(item.menu);
        break;
      }
    }
  }
  return menu;
};

export default useRestaurant;
