import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { orderbooksapi } from "../../services/allapi";

const BuyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    mobno: "",
  });

        const [token, settoken] = useState("");
  

  useEffect(() => {
    const savedAddress = sessionStorage.getItem("address");
    const savedMobno = sessionStorage.getItem("mobno");
    setUserDetails({
      name: "",
      address: savedAddress || "",
      mobno: savedMobno || "",
    });
  }, []);

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleOrder =async () => {
    if (!userDetails.name || !userDetails.address || !userDetails.mobno) {
      Swal.fire("Oops!", "Please fill all fields!", "warning");
      
    }
    else{
      const header = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                      };
                const result =await orderbooksapi(book._id ,header)
                console.log(result);

                if(result.status==200){
                  Swal.fire("Success!", `Order placed for "${book.title}" at ₹${book.price}.`, "success").then(() => {
                    navigate("/account/orders");
                  });
                 
                }
                
                else{
                  Swal.fire({
                    title: 'oops!',
                    text:'something went wrong',
                    icon: 'error',
                    
                  })
                 
                  
                }
     
    }
     
 
  };
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      settoken(sessionStorage.getItem("token"));
    }
  
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Order</h2>
        <p className="text-lg mb-4">
          <strong>Book:</strong> {book.title}
        </p>
        <p className="text-lg mb-4">
          <strong>Price:</strong> ₹{book.price}
        </p>
        <div className="space-y-4">
          <input
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            type="text"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Full Name"
          />
          <textarea
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Address"
            rows="3"
          ></textarea>
          <input
            name="mobno"
            value={userDetails.mobno}
            onChange={handleInputChange}
            type="tel"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Mobile Number"
          />
          <button
            onClick={handleOrder}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
