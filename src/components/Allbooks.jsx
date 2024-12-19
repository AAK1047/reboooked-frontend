import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Header from "./Header";
import { allbooksapi } from "../../services/allapi";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

const AllBooks = () => {
  const [allbook, setAllBook] = useState([]);
  const [searchKey, setSearchKey] = useState(""); 

  const getAllBooks = async () => {
    const result = await allbooksapi(searchKey); 
    console.log(result.data);
    setAllBook(result.data);
  }; 

  useEffect(() => {
    
     getAllBooks()
  }, [searchKey]); 

  return (
    <>
      <Header />
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

      <div className="bg-gray-50 min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          All Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allbook?.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBooks;
