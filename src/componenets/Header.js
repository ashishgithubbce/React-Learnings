import { HEADER_LOGO } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineOffline from "../utils/useOnlineOffline"; // Custom hook to check online/offline status
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux to access Redux store state
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const isOnline = useOnlineOffline(); // Using the custom hook to check online/offline status
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); // Accessing cart state from Redux store and we are subscribing to the cart slice of the Redux store using useSelector hook from react-redux
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg ">
      <div className="logo-container">
        <img
          className="w-24"
          src={HEADER_LOGO}
          //src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/08/Fresh-food-logo-design-on-transparent-background-PNG.png"
        />
      </div>
      <div className="fles items-center">
        <ul className="flex p-4 m-4  text-2xl font-semibold ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="status-item px-4">
            <span>{isOnline ? "🟢" : "🔴"}</span>
          </li>

          <li>
            <button
              onClick={handleLogin}
              className={isLoggedIn ? "login" : "logout"}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
          <li className="px-4 text-lime-700 bg-amber-100 border-1 rounded-lg p-0.5 mx-2 text-[18px]">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
