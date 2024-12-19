import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { alluserapi } from "../../services/allapi";

const UserPagination = () => {
  const [userdetails, setuserdetails] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6; // Number of users per page

  // Calculate the index range for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userdetails.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total pages
  const totalPages = Math.ceil(userdetails.length / usersPerPage);

  // Handlers for page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getAlluser = async () => {
    const result = await alluserapi(searchKey);
    console.log(result.data.existingUser);
    setuserdetails(result.data.existingUser);
  };

  useEffect(() => {
    getAlluser();
  }, [searchKey]);

  // Determine if the footer should be fixed
  const shouldFixFooter =
    currentUsers.length <= 3 &&
    window.innerWidth >= 768; // Check if the screen width is >= md breakpoint

  return (
    <>
     
        <AdminHeader />
    

      {/* Main Content */}
      <div className="container mx-auto p-4 pt-20 pb-20">
        <header className="bg-white text-gray-800 px-6 py-4">
          {/* Search Bar for larger screens */}
          <div className="relative hidden md:block mx-auto w-full max-w-md">
            <input
              type="text"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search for books..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-2 right-3 text-gray-500"
            />
          </div>

          {/* Mobile Search Bar */}
          <div className="relative md:hidden w-full max-w-md mx-auto mt-4">
            <input
              type="text"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search for books..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-2 right-3 text-gray-500"
            />
          </div>
        </header>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">User Details</h1>

          {/* User Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentUsers.map((user) => (
              <div key={user._id} className="card border rounded shadow p-4">
                <h3 className="text-lg font-bold">{user.username}</h3>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
                {/* <div className="mt-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </div> */}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-l ${
                currentPage === 1
                  ? "bg-gray-300"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 border">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-r ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally Fixed Footer */}
      <div
        className={`${
          shouldFixFooter ? "fixed bottom-0 left-0 w-full z-10" : ""
        }`}
      >
        <AdminFooter />
      </div>
    </>
  );
};

export default UserPagination;
