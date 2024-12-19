import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons'


const AdminHome = () => {
  return (
    <>
    <AdminHeader/>

        

        <div className="container mx-auto px-4 py-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="flex justify-center my-10 space-x-4">
            
      <Link to="/">
         <button className="bg-black text-white hover:bg-red-700 border border-white px-6 py-2 rounded-md text-lg">
                 Switch User
              </button>  
            </Link>
            </div>
     

      <div className="grid grid-cols-1 mt-5  sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* View Users */}


<Link to={"/viewuser"} className="block">
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
    <FontAwesomeIcon icon={faUsers} size="3x" className="text-blue-600 mb-4" />
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">View Users</h2>
    <p className="text-lg text-gray-600">Monitor registered users.</p>
  </div>
</Link>

{/* View Books */}
<Link to={"/viewbooks"} className="block">
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
    <FontAwesomeIcon icon={faBookOpen} size="3x" className="text-indigo-600 mb-4" />
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">View Books</h2>
    <p className="text-lg text-gray-600">Check listings, pending approvals, and sold books.</p>
  </div>
</Link>

{/* Payment Details */}
<Link className="block">
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
    <FontAwesomeIcon icon={faWallet} size="3x" className="text-green-600 mb-4" />
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
    <p className="text-lg text-gray-600">Review payment histories and manage transactions.</p>
  </div>
</Link>


      </div>
      
    </div>

    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Testimonials</h1>
      <div className="relative">
        <div
          className="flex gap-8 animate-marquee whitespace-nowrap"
          style={{ animation: "marquee 15s linear infinite" }}
        >
          <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">"Great platform, helped me find rare books!"</p>
            <span className="text-sm text-gray-500 block mt-2">- User 1</span>
          </div>
          <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">"Super easy to use and affordable."</p>
            <span className="text-sm text-gray-500 block mt-2">- User 2</span>
          </div>
          <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">"Loved the experience, highly recommend!"</p>
            <span className="text-sm text-gray-500 block mt-2">- User 3</span>
          </div>
        </div>
      </div>
    </div>
    <AdminFooter/>
    </>
  )
}

export default AdminHome