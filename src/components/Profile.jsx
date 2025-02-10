import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { editprofileapi } from "../../services/allapi";

const MySwal = withReactContent(Swal);

const Profile = () => {
  const [profile , setprofile]=useState({
      username:"",
      address:"",
      mobno:""
    })
      const [token, settoken] = useState("");
      const [existinguser,setexistinguser]=useState()
    
    const editprofile = async()=>{
        const {username , mobno ,address}=profile
        if(!username , !mobno ,!address){
          MySwal.fire({
            title: 'oops!',
            text: 'please fill the form completely',
            icon: 'info',
            
          })
        }
        else{
          const header = {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                };
          const result =await editprofileapi(profile ,header)
          console.log(result);
    
          if(result.status==200){
            MySwal.fire({
              title: 'WOW!',
              text: 'Profile updation successfull',
              icon: 'success',
              
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
      }
    
      useEffect(() => {
        if (existinguser) {
          console.log("existinguser:", existinguser);
      
          setprofile({
            username: existinguser.username,
            address: existinguser.address,
            mobno: existinguser.mobno,
          });
        }
      }, [existinguser]);
      
      useEffect(() => {
        console.log("Updated profile:", profile);
      }, [profile]);

       useEffect(() => {
          if (sessionStorage.getItem("token")) {
            settoken(sessionStorage.getItem("token"));
            const user = sessionStorage.getItem("existinguser");
            if (user) {
              setexistinguser(JSON.parse(user));  
            }
             }
        
        }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
        <div className="space-y-4">
          <input  value={profile.username}
            onChange={(e)=>setprofile({...profile,username:e.target.value})}
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Username"
          />
          <input
          value={profile.mobno}
          onChange={(e)=>setprofile({...profile,mobno:e.target.value})}
            type="tel"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Mobile Number"
          /> 
          <textarea
          value={profile.address}
          onChange={(e)=>setprofile({...profile,address:e.target.value})}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Address"
            rows="3"
          ></textarea>
          <button onClick={editprofile}
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
