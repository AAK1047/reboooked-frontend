import React, { useEffect, useState } from "react";
import { sellbookapi } from "../../services/allapi";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from "../components/Header";
import Footer from "../components/Footer"

const MySwal = withReactContent(Swal);


const SellBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    condition: "New",
    type: "Fiction",
    description: "",
    frontCover: "",
    backCover: "",
    prinumber:"",
    secnumber:""
  });
  const [token , settoken]=useState("")
 
  
  const onsubmit =async ()=>{
    
    const {title,author,price,condition,type,description,frontCover,backCover,prinumber,secnumber}=formData

    if(!title||!price|!condition|!type|!description|!frontCover|!backCover||!prinumber||!secnumber){
      MySwal.fire({
        title: 'oops!',
        text: 'please fill the form completely',
        icon: 'info',
        
      })
    }
    else{
      console.log('inside else');


      const reqbody = new FormData()
      reqbody.append("title",title)
      reqbody.append("author",author)
      reqbody.append("price",price)
      reqbody.append("condition",condition)
      reqbody.append("type",type)
      reqbody.append("description",description)
      reqbody.append("frontCover",frontCover)
      reqbody.append("backCover",backCover)
      reqbody.append("prinumber",prinumber)
      reqbody.append("secnumber",secnumber)

         if(token){
             console.log('inside if');
             
          const header = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }

           const result = await sellbookapi(reqbody,header)
           console.log(result);
           if(result.status==200){
            MySwal.fire({
              title: 'WOW!',
              text: 'Registration successfull',
              icon: 'success',
              
            })
            setFormData({
              title: "",
              author: "",
              price: "",
              condition: "New",
              type: "Fiction",
              description: "",
              frontCover: "",
              backCover: "",
            })
           }
           else{
            MySwal.fire({
              title: 'oops!',
              text:'something went wrong',
              icon: 'error',
              
            })
            
           }
         }
         else{
     
          MySwal.fire({
            title: 'oops!',
            text: "please login",
            icon: 'warning',
            
          })
         }
    }
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }
},[])
  return (
    <>
      <Header/>
      <div className="bg-gray-50 min-h-screen p-6 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Sell Your Used Book
          </h2>
          <div className="space-y-4">
            {/* Title */}
            <div>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                onChange={(e)=>setFormData({...formData,title:e.target.value})}
                value={formData.title}
                required
              />
            </div>
            {/* Author */}
            <div>
              <input
                type="text"
                name="author"
                placeholder="Book Author (optional)"
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                onChange={(e)=>setFormData({...formData,author:e.target.value})}
                value={formData.author}
  
               
              />
            </div>
            {/* Price */}
            <div>
              <input
                type="number"
                name="price"
                placeholder="Enter Price (₹)"
                onChange={(e)=>setFormData({...formData,price:e.target.value})}
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                required
                value={formData.price}
  
              />
            </div>
            {/* Condition */}
            <div>
              <select
                name="condition"
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                onChange={(e)=>setFormData({...formData,condition:e.target.value})}
                value={formData.condition}
  
  
              >
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            {/* Book Type */}
            <div>
              <select
                name="type"
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                onChange={(e)=>setFormData({...formData,type:e.target.value})}
                value={formData.type}
  
  
              >
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Textbooks">Textbooks</option>
              </select>
            </div>
            {/* Description */}
            <div>
              <textarea
                name="description"
                placeholder="Any additional details..."
                onChange={(e)=>setFormData({...formData,description:e.target.value})}
                value={formData.description}
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Front Cover */}
            <div>
            <label className="block font-medium text-gray-700 mb-1">
                Upload Front Cover
              </label>
              <input
                type="file"
                name="frontCover"
                accept="image/*"
                // value={formData.frontCover}
                className="w-full border rounded-md px-4 py-2"
                onChange={(e)=>setFormData({...formData,frontCover:e.target.files[0]})}
               
                required
              />
            </div>
            {/* Back Cover */}
            <div>
            <label className="block font-medium text-gray-700 mb-1">
                Upload Back Cover
              </label>
              <input
                type="file"
                name="backCover"
                accept="image/*"
                className="w-full border rounded-md px-4 py-2"
                onChange={(e)=>setFormData({...formData,backCover:e.target.files[0]})}
  
                required
              />
            </div>
            {/* primary number */}
            <div>
              <input
                type="text"
                name="title"
                placeholder="your primary mobile number"
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                onChange={(e)=>setFormData({...formData,prinumber:e.target.value})}
                value={formData.prinumber}
                required
              />
            </div>{/* secondary number */}
            <div>
              <input
                type="text"
                name="title"
                placeholder="secondary number"
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                onChange={(e)=>setFormData({...formData,secnumber:e.target.value})}
                value={formData.secnumber}
                required
              />
            </div>
            {/* Submit Button */}
            <button
              
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              onClick={onsubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default SellBook;
