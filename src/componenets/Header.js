import { HEADER_LOGO } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={HEADER_LOGO}
          //src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/08/Fresh-food-logo-design-on-transparent-background-PNG.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>CART</li>
          <li>
            <button
              onClick={handleLogin}
              className={isLoggedIn ? "login" : "logout"}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
