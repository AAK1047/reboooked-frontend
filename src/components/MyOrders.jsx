import React, { useEffect, useState } from "react";
import { orderbooksapi, orderedbooksapi, sellorderapi } from "../../services/allapi";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
  const [orderedBooks, setOrderedBooks] = useState([]);
  const [token, setToken] = useState("");

  const getMyOrders = async () => {
    if (token) {
      const header = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      console.log(header);
      
      const result = await orderedbooksapi(header);
      if (result.status === 200 && result.data) {
        setOrderedBooks(result.data.orderedBooks);
      } else {
        console.error("Failed to fetch orders:", result);
      }
      
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    getMyOrders();
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {orderedBooks.length > 0 ? (
          orderedBooks.map((book) => <OrderDetails key={book._id} order={book} />)
        ) : (
          <p className="text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
