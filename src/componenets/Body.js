import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [data, setData] = useState([]);
  const [resdata, setresData] = useState([]);
  const [topRated, setTopRated] = useState(false);
  const filterRestaurant = () => {
    setTopRated(!topRated);
    const filterData = data.filter((res) => res.info.avgRating > 4.1);
    setresData(filterData);
  };
  const resetData = () => {
    setTopRated(!topRated);
    setresData(data);
  };
  useEffect(() => {
    fetchData();
    //fetchData1();
  }, []);
  // const fetchData1 = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           title: "Sample Title",
  //           body: "Sample Body",
  //           userId: 1,
  //         }),
  //       }
  //     );
  //     const json = await response.json();
  //     console.log(json.data.cards);
  //     // Example: setData([json]); // If your API returns an array, adjust accordingly
  //     // setresData([json]);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4392141&lng=78.3922572&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]
        .info.id
    );
    setData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setresData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredData = data.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setresData(filteredData);
  };
  //conditional rendering
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="searchCntainer">
        <input
          type="search"
          className="search"
          placeholder="Search Restaurant.."
          onChange={handleSearch}
          // onChange={(e) => {
          //   const searchText = e.target.value;
          //   const filteredData = data.filter((res) =>
          //     res.name.toLowerCase().includes(searchText.toLowerCase())
          //   );
          //   setData(filteredData);
          // }
          // }
        ></input>
        <div className="filter">
          <button
            className={!topRated ? "filter-btn" : "reset-btn"}
            onClick={!topRated ? filterRestaurant : resetData}
          >
            {topRated ? "Reset" : "Top Rated Restaurant"}
          </button>
        </div>
      </div>
      <div className="restaurant-conatiner">
        {resdata.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
