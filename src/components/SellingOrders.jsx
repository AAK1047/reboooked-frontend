import React, { useEffect, useState } from "react";
import { sellorderapi } from "../../services/allapi";
import OrderList from "./OrderList";

const SellingOrders = () => {
  const [pendingOrder, setPendingOrder] = useState([]);
  const [listingOrder, setListingOrder] = useState([]);
  const [rejectedOrder, setRejectedOrder] = useState([]);
  const[DelStatus , setDelStatus]=useState()

  const [token, setToken] = useState("");
  const [activeTab, setActiveTab] = useState("pending");

  const getSellingOrder = async () => {
    if (token) {
      const header = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const result = await sellorderapi(header);
      setListingOrder(result.data.listingBooks);
      setPendingOrder(result.data.pendingBooks);
      setRejectedOrder(result.data.rejectedBooks);
    }
  };

  useEffect(() => {
    getSellingOrder();
  }, [token,DelStatus]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "pending"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          Pending Orders
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "listing"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("listing")}
        >
          Listing Orders
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "rejected"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("rejected")}
        >
          Rejected Orders
        </button>
      </div>

      {/* Orders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        {activeTab === "pending" &&
          pendingOrder?.map((book) => <OrderList key={book._id} order={book} />)}
        {activeTab === "listing" &&
          listingOrder?.map((book) => <OrderList key={book._id} order={book} />)}
        {activeTab === "rejected" &&
          rejectedOrder?.map((book) => <OrderList key={book._id} order={book} setDelStatus={setDelStatus} />)}
      </div>
    </div>
  );
};

export default SellingOrders;
