import { useState, useEffect } from "react";
import { MENU_API } from "./constant"; // Adjust the import path as necessary
const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      //console.log("Menu JSON:");
      //console.log(json);
      setResMenu(json?.data);
    };
    fetchMenu();
  }, [resId]); // Dependency array to re-fetch when resId changes
  return resMenu;
};
export default useRestaurantMenu;
