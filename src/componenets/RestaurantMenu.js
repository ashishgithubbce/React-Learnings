import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
//import { useState } from "react";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // Custom hook to fetch restaurant menu
import RestaurantCategory from "./RestaurantCategory";
function findMenuItemsList(resMenu) {
  const menuItemsList =
    resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = menuItemsList?.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("Categories:", categories); // Debugging line to check the structure
  const menuItemsList2 = categories?.map((category) => category.title);
  console.log("Menu Items List:", menuItemsList); // Debugging line to check the structure
  const menuItems = menuItemsList?.find((card) => card?.card?.card?.itemCards)
    ?.card?.card?.itemCards;
  return menuItems;
}
const getMenuItems = (resMenu) => {
  const menuItemsList =
    resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = menuItemsList?.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("Categories : ", categories); // Debugging line to check the
  const menuItemsList2 = categories?.map(
    (category) => category?.card?.card?.title
  );
  console.log("Menu Items List:", menuItemsList2); // Debugging line to check the structure
  return categories;
};
const RestaurantMenu = () => {
  const [itemIndex, setItemIndex] = useState(-1);
  const handleToggleOpen = (index) => {
    if (itemIndex === index) {
      setItemIndex(-1); // Close if the same index is clicked
      return;
    }
    console.log("Toggling index:", index);
    setItemIndex(index); // Toggle the isOpen state
  };
  const { resId } = useParams(); // Get the restaurant ID from the URL parameters
  const [flag, setFlag] = useState(false);
  const resMenu = useRestaurantMenu(resId);
  if (resMenu.length === 0) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu.cards[2]?.card.card.info;
  const menuItems = findMenuItemsList(resMenu);
  const categories = getMenuItems(resMenu);
  return (
    <div className="bg-gray-50 min-h-screen w-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 m-4">
        {/* Restaurant Name */}
        <h1 className="text-orange-700 text-4xl font-extrabold tracking-wide mb-4">
          {name}
        </h1>

        {/* Cuisines + Cost */}
        <h2 className="text-2xl md:text-2xl font-medium text-blue-700 mb-6">
          {cuisines.join(", ")} • {costForTwoMessage}
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Menu Title */}
        {/* <h3 className="text-3xl font-semibold text-pink-700 mb-4">Menu</h3> */}
      </div>
      <div className="py-4 my-2 h-screen  text-blue-300">
        {categories?.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            handleToggleOpen={handleToggleOpen}
            isOpen={itemIndex == index ? true : false}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
