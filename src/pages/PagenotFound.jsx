import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer"

function Pagenotfound() {
  return (
   <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <img
            src="https://cdn.dribbble.com/users/1069548/screenshots/8227150/page-not-found.gif"
            alt="Page not found"
            className="w-3/4 mx-auto"
          />
          <h1 className="text-2xl font-bold mt-5">Looks like you're lost</h1>
          <h5 className="text-gray-600 mt-2">The page you are looking for is unavailable</h5>
          <Link to={'/'}>
            <button className="bg-blue-800 text-white px-4 py-2 mt-5 rounded hover:bg-blue-900 transition">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
   </>
  );
}

export default Pagenotfound;
