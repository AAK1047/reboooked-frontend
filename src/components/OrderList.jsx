import React, { useEffect, useState } from "react";
import { serverUrl } from "../../services/serverURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { removebooksapi } from "../../services/allapi";

const OrderList = ({ order ,setDelStatus}) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [fullViewImage, setFullViewImage] = useState("");
  const [token, setToken] = useState("");

  const openDetailModal = () => setIsDetailModalOpen(true);
  const closeDetailModal = () => setIsDetailModalOpen(false);

  const openImageInFullView = (imageUrl) => setFullViewImage(imageUrl);
  const closeFullViewImage = () => setFullViewImage("");

  const onRemoveOrder = async (id) => {
   

      const result = await removebooksapi(id);

      if (result.status === 200) {
        setDelStatus(result.data);
        console.log(result);
        
      }
      else{
        console.log(result);
        
      }
    
  };

  useEffect(() => {
   
  }, []);

  return (
    <div>
      <div className="max-w-sm bg-white border rounded-lg shadow-md overflow-hidden">
        <div className="cursor-pointer" onClick={openDetailModal}>
          <img
            className="h-64 w-full object-cover"
            src={`${serverUrl}/upload/${order?.frontCover}`}
            alt={order.title}
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{order.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{order.author || "Unknown Author"}</p>
            <p className="text-blue-600 font-semibold mt-2">₹{order.price}</p>
          </div>
        </div>
        <div className="flex justify-between p-4 border-t">
          <button
            onClick={() => onRemoveOrder(order._id)}
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            onClick={() => console.log("Edit order:", order._id)}
            className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600"
          >
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative max-w-4xl bg-white rounded-lg shadow-lg p-6">
            <button
              className="absolute top-2 right-2 bg-gray-200 text-gray-800 hover:bg-gray-300 text-2xl rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeDetailModal}
            >
              &times;
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{order.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{order.author || "Unknown Author"}</p>
            <p className="text-blue-600 font-semibold mt-2">₹{order.price}</p>
            <p className="text-gray-700 mt-4">{order.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                className="h-64 w-full object-cover rounded cursor-pointer"
                src={`${serverUrl}/upload/${order?.frontCover}`}
                alt={`${order.title} Front Cover`}
                onClick={() =>
                  openImageInFullView(`${serverUrl}/upload/${order?.frontCover}`)
                }
              />
              <img
                className="h-64 w-full object-cover rounded cursor-pointer"
                src={`${serverUrl}/upload/${order?.backCover}`}
                alt={`${order.title} Back Cover`}
                onClick={() =>
                  openImageInFullView(`${serverUrl}/upload/${order?.backCover}`)
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* Full View Image */}
      {fullViewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-gray-700 text-white text-2xl rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800"
              onClick={closeFullViewImage}
            >
              &times;
            </button>
            <img
              className="max-h-screen max-w-full rounded"
              src={fullViewImage}
              alt="Full View"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;
