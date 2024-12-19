import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { loginresponsecontext } from "../../Context Share/Contextshare";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();
  const { setloginresponse } = useContext(loginresponsecontext);

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
    // Start a 1.5-second timeout to close the dropdown
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 1500);
    setTimeoutId(id);
  };

  const handleMouseEnter = () => {
    // Clear the timeout if the mouse re-enters
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/adminhome" className="text-2xl font-bold flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="mr-2 w-1/2" // Make the logo 50% width on small screens
          />
        </Link>

        {/* Account Dropdown */}
        <div
          className="relative"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 border text-white bg-black border-white p-3 hover:bg-white hover:text-black rounded-md group"
          >
            <span className="text-red-500">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="hidden md:inline"> Account</span>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-48">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
