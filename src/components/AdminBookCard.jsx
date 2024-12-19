import React, { useState } from "react";
import { serverUrl } from "../../services/serverURL";
import { approvebooksapi } from "../../services/allapi";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


const AdminBookCard = ({ book , getallbooks}) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [fullViewImage, setFullViewImage] = useState("");
  
  const openDetailModal = () => setIsDetailModalOpen(true);
  const closeDetailModal = () => setIsDetailModalOpen(false);

  const openImageInFullView = (imageUrl) => setFullViewImage(imageUrl);
  const closeFullViewImage = () => setFullViewImage("");
  
  const onApprove=async(id)=>{
    const result = await approvebooksapi(id)
    if(result.status==200){
      MySwal.fire({
        title: 'WOW!',
        text: 'Hence Approved',
        icon: 'success',
        
      })
      getallbooks()
    }
    else{
      MySwal.fire({
        title: 'oops!',
        text:'something went wrong',
        icon: 'error',
        
      })
      
    }
  }

  return (
    <div>
      <div className="max-w-sm bg-white border rounded-lg shadow-md overflow-hidden">
        <div className="cursor-pointer" onClick={openDetailModal}>
          <img
            className="h-64 w-full object-cover"
            src={`${serverUrl}/upload/${book?.frontCover}`}
            alt={book.title}
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{book.author || "Unknown Author"}</p>
            <p className="text-blue-600 font-semibold mt-2">₹{book.price}</p>
          </div>
        </div>
        <div className="flex justify-between p-4 border-t">
          <button
            onClick={() => onApprove(book._id)}
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
            Approve
          </button>
          <button
            onClick={() => onReject(book>_id)}
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
          >
            Reject
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
            <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{book.author || "Unknown Author"}</p>
            <p className="text-blue-600 font-semibold mt-2">₹{book.price}</p>
            <p className="text-gray-700 mt-4">{book.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                className="h-64 w-full object-cover rounded cursor-pointer"
                src={`${serverUrl}/upload/${book?.frontCover}`}
                alt={`${book.title} Front Cover`}
                onClick={() => openImageInFullView(`${serverUrl}/upload/${book?.frontCover}`)}
              />
              <img
                className="h-64 w-full object-cover rounded cursor-pointer"
                src={`${serverUrl}/upload/${book?.backCover}`}
                alt={`${book.title} Back Cover`}
                onClick={() => openImageInFullView(`${serverUrl}/upload/${book?.backCover}`)}
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => onApprove(book._id)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => onReject(book._id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Reject
              </button>
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

export default AdminBookCard;
