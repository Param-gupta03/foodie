import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const online = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-pink-100">
      <div className="w-40">
        <img className="w-full h-auto object-contain" src={LOGO_URL} alt="Logo" />
      </div>
      <ul className="flex items-center space-x-6">
        <li className="text-sm font-medium">Online Status: {online ? "✅" : "🔴"}</li>
        <li className="text-sm font-medium hover:text-blue-500">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm font-medium hover:text-blue-500">
          <Link to="/about">About Us</Link>
        </li>
        <li className="text-sm font-medium hover:text-blue-500">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="text-sm font-medium">Cart</li>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() =>
            setButtonName(buttonName === "Login" ? "Logout" : "Login")
          }
        >
          {buttonName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
