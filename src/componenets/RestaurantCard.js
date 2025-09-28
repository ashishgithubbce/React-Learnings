import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  //destructure on the fly
  //const { resName, about, rating, delTime, cuisine } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData.info;
  const isOpen = resData.info.availability.opened;
  const deliveryTime = resData.info.sla.deliveryTime + " mins";

  return (
    <div className="w-80 m-2 p-6 border-1 rounded-md border-blue-600 bg-gray-200 hover:bg-green-50 hover:pointer-coarse:">
      <Link to={"/restaurants/" + resData.info.id}>
        <img
          className="border-2 rounded-sm border-orange-500  font-bold"
          src={CDN_URL + cloudinaryImageId}
          alt={resData.name}
        />
        <h3 className="text-2xl text-yellow-600 py-0.5">{name}</h3>
      </Link>

      <h4>{cuisines.join(", ")}</h4>
      <h5>⭐ {avgRating}</h5>
      <p>{deliveryTime}</p>
      <p className={isOpen ? "text-green-500" : "text-red-600"}>
        {isOpen ? "Open Now" : "Closed"}
      </p>
    </div>
  );
};

export default RestaurantCard;
