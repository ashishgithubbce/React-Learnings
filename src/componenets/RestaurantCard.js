import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
  //destructure on the fly
  //const { resName, about, rating, delTime, cuisine } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData.info;
  const isOpen = resData.info.availability.opened;
  const deliveryTime = resData.info.sla.deliveryTime + " mins";

  return (
    <div className="res-card" style={{ background: "lightBlue" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={resData.name}
      />
      <h3 style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}>
        {name}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>⭐ {avgRating}</h5>
      <p>{deliveryTime}</p>
      <p className={isOpen ? "text-green-600" : "text-red-500"}>
        {isOpen ? "Open Now" : "Closed"}
      </p>
    </div>
  );
};

export default RestaurantCard;
