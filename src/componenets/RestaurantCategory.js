import { useState } from "react";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategory = ({ data, handleToggleOpen, isOpen, index }) => {
  //const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 100; // limit characters for description

  const menuItems = data?.itemCards || [];
  const diaspatch = useDispatch(); //to dispatch actions to the redux store, useDispatch is a hook provided by react-redux library, it will return the dispatch function from the redux store and it will be used to dispatch actions to the redux store

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleAddItemToCart = (item) => {
    //dispatch an action to add item to cart
    diaspatch(addItem(item)); //dispatching addItem action to the redux store with item.card.info as payload
  };

  return (
    <div className="py-4 my-2 w-6xl bg-gray-100 border-2 border-blue-100 rounded-lg shadow-lg p-4 m-2">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => handleToggleOpen(index)}
      >
        <span className="text-gray-900 font-bold text-2xl">
          {data.title} ({menuItems.length})
        </span>
        <span className="text-xl text-gray-600">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="mt-3 font-semibold">
          {menuItems?.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="border-b border-gray-300 py-4 flex justify-between gap-4"
            >
              {/* Left Section (Text Content) */}
              <div className="flex-1">
                {/* Veg/Non-Veg */}
                <div>
                  {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                    ? "🟩"
                    : "🟥"}
                </div>

                {/* Item Name */}
                <div className="text-gray-800 py-1 font-medium">
                  {item?.card?.info?.name}
                </div>

                {/* Price */}
                <div className="text-gray-600">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>

                {/* Rating */}
                <div className="flex flex-wrap gap-2 items-center mt-1">
                  {item?.card?.info?.ratings?.aggregatedRating
                    ?.ratingCountV2 && (
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-green-600 fill-green-600" />
                      <span>
                        {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                        {
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </span>
                    </span>
                  )}
                </div>

                {/* Description with See More / See Less */}
                <div className="mt-2 text-sm">
                  <span className="text-gray-500">
                    {isExpanded
                      ? item?.card?.info?.description
                      : item?.card?.info?.description?.slice(0, limit)}
                    {item?.card?.info?.description &&
                      item?.card?.info?.description.length > limit &&
                      !isExpanded &&
                      "..."}
                  </span>
                  {item?.card?.info?.description &&
                    item?.card?.info?.description.length > limit && (
                      <button
                        onClick={toggleExpanded}
                        className="ml-2 text-blue-600 font-medium hover:underline"
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </button>
                    )}
                </div>
              </div>

              {/* Right Section (Image) */}
              {item?.card?.info?.imageId && (
                <div className="flex-shrink-0 relative mb-5">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${item.card.info.imageId}`}
                    alt={item.card.info.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-3/4 bg-gray-200 text-green-600 py-1 rounded-lg hover:bg-blue-200 shadow-2xl font-bold "
                    onClick={() => handleAddItemToCart(item)} //dispatch action to add item to cart
                  >
                    ADD
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
