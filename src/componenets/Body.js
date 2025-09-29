import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineOffline from "../utils/useOnlineOffline"; // Custom hook to check online/offline status
import userContext from "../utils/UserContext";
const Body = () => {
  const [data, setData] = useState([]);
  const [resdata, setresData] = useState([]);
  const [topRated, setTopRated] = useState(false);
  const { loggedInUser, setUsername, userName } = useContext(userContext);
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
    //console.log("json data");
    //console.log(json);
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
  const isOnline = useOnlineOffline(); // Using the custom hook to check online/offline status
  if (!isOnline) return <h1>Offline, Please check your internet connection</h1>;
  console.log("Body Rendered ");
  console.log(data.length);
  return data?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex justify-between items-center mx-1 my-2 p-2">
        <input
          type="search"
          className="border-2 border-blue-300 border-solid p-2 rounded-lg w-2/5"
          placeholder="Search"
          data-testid="search-input"
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
        <input
          className="border p-1 rounded-lg"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <div className="filter">
          <button
            className={
              !topRated
                ? "bg-green-200 border-2 font-semibold border-gray-400 rounded-lg p-2 text-blue-600 text-shadow-blue-500 "
                : "bg-red-300 border-2 border-gray-400 rounded-lg p-2 mr-3 font-bold  text-blue-600 "
            }
            onClick={!topRated ? filterRestaurant : resetData}
          >
            {topRated ? "Reset" : "Top-Rated Restaurants"}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {resdata.map((res) => {
          return (
            //<Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard key={res.info.id} resData={res} />
            //</Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
