import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/rebooklogo.png";
import { loginresponsecontext } from "../../Context Share/Contextshare";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();
  const {loginresponse, setloginresponse } = useContext(loginresponsecontext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    sessionStorage.clear();
    setDropdownOpen(false);
    setloginresponse(false);
    navigate("/");
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 0.5 seconds
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 1500);
    setTimeoutId(id);
  };

  const handleMouseEnter = () => {
    // Clear the timeout if the mouse returns
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  return (
    <header className="bg-blue-800 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="mr-2 w-1/2" // Make the logo 50% width on small screens
          />
        </Link>

        {/* Cart and My Account */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link to={"/cart"}>
            <button className="flex gap-2 border border-white p-3 hover:bg-white hover:text-violet-900 rounded-md group">
              <span className="text-green-500">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span className="hidden md:inline"> Cart</span>
            </button>
          </Link>

          {/* My Account Dropdown */}
          <div
            className="relative"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 border border-white p-3 hover:bg-white hover:text-violet-900 rounded-md group"
            >
              <span className="text-green-500">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="hidden md:inline"> Account</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-48">
            { !loginresponse? 
            <Link
            to="/login"
            className="block px-4 py-2 hover:bg-gray-200"
          >
           Login
          </Link>
            :
        <>
               <Link
                    to="/account/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/account/orders"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/account/selling-orders"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Selling Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
        </>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
