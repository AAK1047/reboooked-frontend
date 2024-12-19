import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginapi, registerapi } from "../../services/allapi";
import { loginresponsecontext } from "../../Context Share/Contextshare";
import Footer from "../components/Footer"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from "../components/Header";

const MySwal = withReactContent(Swal);

const Auth = ({register}) => {

  const navigate = useNavigate()
  const [userdetails , setuserdetails]=useState({
    username:"",
    email:"",
    password:""
  })
  const {setloginresponse , setrole}=useContext(loginresponsecontext)

  const handleregister = async()=>{
    const {username , email ,password}=userdetails
    if(!username , !email ,!password){
      MySwal.fire({
        title: 'oops!',
        text: 'please fill the form completely',
        icon: 'info',
        
      })
    }
    else{
      const result =await registerapi(userdetails)
      console.log(result);

      if(result.status==200){
        MySwal.fire({
          title: 'WOW!',
          text: 'Registration successfull',
          icon: 'success',
          
        })
        setuserdetails({
          username:"",
           email:"",
           password:""
        })
        navigate('/login')
      }
      else if(result.status==406){
        MySwal.fire({
          title: 'oops!',
          text: result.response.data,
          icon: 'warning',
          
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
  const handlelogin = async ()=>{
    const {email ,password}=userdetails
    if(!email ,!password){
      MySwal.fire({
        title: 'oops!',
        text: 'please fill the form completely',
        icon: 'info',
        
      })
    }
    else{
      const result =await loginapi(userdetails)
      console.log(result);

      if(result.status==200){
        MySwal.fire({
          title: 'WOW!',
          text: 'Login successfull',
          icon: 'success',
          
        })
        setloginresponse(true)
        setrole(result.data.existingUser.role)
        setuserdetails({
          username:"",
          email:"",
          password:""
        })
       
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        

          navigate('/')
      

        
        // setTimeout(()=>{
      
          
        // },2000)
      }
      else if(result.status==406){
           
            MySwal.fire({
              title: 'oops!',
              text: result.response.data,
              icon: 'warning',
              
            })
            setuserdetails({
              username:"",
              email:"",
              password:""
            })
      }
      else{
        MySwal.fire({
          title: 'oops!',
          text:'something went wrong',
          icon: 'error',
          
        })
        setuserdetails({
          username:"",
          email:"",
          password:""
        })
        
      }
      
    }
  }
  return (
   
<>
<Header/>
        <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
{ register?     <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://media.istockphoto.com/id/123217686/photo/old-knowledge.jpg?s=612x612&w=0&k=20&c=WIe5EKmOxWUEXSnfzjtt6iQiEsSvq5GMFDCqki1IYwg=)`,
          }}
        ></div>
        
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome </p>
          <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              value={userdetails.username}
            onChange={(e)=>setuserdetails({...userdetails,username:e.target.value})}
              
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              required
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
            value={userdetails.email}
            onChange={(e)=>setuserdetails({...userdetails,email:e.target.value})}

              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
            value={userdetails.password}
            onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
          
          </div>
          <div className="mt-8">
            <button onClick={handleregister} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Register
            </button>
          </div>
          
        
          <div className="mt-4 flex items-center w-full text-center">
            <Link
              to={'/login'}
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Already a user ?
              <span className="text-blue-700"> Login</span>
            </Link>
          </div>
        </div>
      </div>

      :

      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
       
        
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
             value={userdetails.email}
             onChange={(e)=>setuserdetails({...userdetails,email:e.target.value})}
 
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
            value={userdetails.password}
            onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
           
          </div>
          <div className="mt-8">
            <button onClick={handlelogin} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Login
            </button>
          </div>
          
          
          <div className="mt-4 flex items-center w-full text-center">
          <Link
              to={'/register'}
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Dont have an account ?
              <span className="text-blue-700"> Register</span>
            </Link>
          </div>
        </div>
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/217/367/desktop-wallpaper-50-bookshop-book-shop.jpg)`,
          }}
        ></div>
      </div>}

        </div>
        <Footer/>
     

</>
  );
};
export default Auth;
