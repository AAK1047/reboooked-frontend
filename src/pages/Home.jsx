import { faBoxOpen, faCreditCard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { homebooksapi } from "../../services/allapi";
import BookCard from "../components/BookCard";
import { loginresponsecontext } from "../../Context Share/Contextshare";
import Footer from "../components/Footer"

const Home = () => {
  // const [islogin , setislogin]=useState(false)
  const [homebook , sethomebook]=useState([])
  const {loginresponse,role}=useContext(loginresponsecontext)
  
   const gethomebooks = async ()=>{
    const result = await homebooksapi()
    console.log(result.data);
    
    
    sethomebook(result.data)
   }

  useEffect(()=>{
    gethomebooks()
  

  },[])

  return (
  <>
     <Header/>
  
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white text-center py-20 px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to ReBooked</h1>
          <p className="text-lg mb-6">
            Buy and sell used books at affordable prices. Give books a second life!
          </p>
        {loginresponse?  <div className="flex justify-center space-x-4">
            <Link to="/sell">
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-md text-lg">
                Sell Books
              </button>
            </Link>
            {role=="admin"&&  <Link to="/adminhome">
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-md text-lg">
              Switch Admin
              </button>
            </Link>}


          </div>
          :
          <div className="flex justify-center space-x-4">
           <Link to="/login">
           <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-md text-lg">
             Sell Books
           </button>
         </Link>
        <Link to="/login">
           <button className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-md text-lg">
             Login
           </button>
         </Link>

       </div>
          }
        </section>
  
        {/* Categories Section */}
        <section className="container mx-auto py-16 px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           <Link to={'/fiction'}>
                  
                <div className="bg-white shadow-md rounded-md p-6 text-center">
                  <img className="w-100 md:h-[250px]" src="https://images.csmonitor.com/csm/2020/12/1112756_1_1209-best-2020-fiction_standard.jpg?alias=standard_900x600" alt="" />
                  <h3 className="text-xl font-semibold mb-4">Fiction</h3>
      
                  <p>Explore a world of imagination.</p>
                </div>
      
           </Link>
  
           <Link to={'/non-fiction'}>
                <div className="bg-white shadow-md rounded-md p-6 text-center">
                  <img className="w-100 md:h-[250px]" src="https://i.guim.co.uk/img/media/b5be39733b6d90005264bc9643c1619c83f6be43/0_0_2560_1536/master/2560.jpg?width=1200&quality=85&auto=format&fit=max&s=ea91664ce09ab33b3891a00115381c6a" alt="" />
                  <h3 className="text-xl font-semibold mb-4">Non-Fiction</h3>
                  <p>Learn and grow with insightful reads.</p>
                </div>
           </Link>
  
          <Link to={'/textbooks'}>
                <div className="bg-white shadow-md rounded-md p-6 text-center">
                  <img className="w-100 md:h-[250px]" src="https://enterprisersproject.com/sites/default/files/2022-01/cio_tech_books_2022.png" alt="" />
                  <h3 className="text-xl font-semibold mb-4">Textbooks</h3>
                  <p>Find affordable books for your studies.</p>
                </div>
                
          </Link>
          </div>
        </section>
  
        <div className="bg-gray-50 min-h-screen p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       {homebook?.map((book) => (
       <BookCard key={book._id} book={book} />  
    ))}
    </div>
    <div className="flex justify-center mt-5 space-x-4">
    <Link to="/allbooks">
    <button className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-md text-lg">
             All Books
           </button>
           </Link>
           </div>
    </div>
      
  
        {/* Steps Section */}
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">How to Buy Secondhand Books on ReBooked</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Save money and discover great books with just 3 easy steps!</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <FontAwesomeIcon icon={faSearch} size="3x" className="text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Search</h2>
            <p className="text-lg text-gray-600">Browse our vast collection of secondhand books and find your next read.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <FontAwesomeIcon icon={faCreditCard} size="3x" className="text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Order</h2>
            <p className="text-lg text-gray-600">Select your books and checkout securely using our easy payment options.</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <FontAwesomeIcon icon={faBoxOpen} size="3x" className="text-yellow-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Enjoy</h2>
            <p className="text-lg text-gray-600">Your books will be delivered right to your doorstep, ready to read.</p>
          </div>
        </div>
      </div>
  
      </div>
      <Footer/>
  </>
  );
};

export default Home;
