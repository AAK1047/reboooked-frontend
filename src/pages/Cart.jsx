import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { getcartapi } from '../../services/allapi'
import BookCart from '../components/BookCart'

const Cart = () => {
  const [cartbook , setcartbook]=useState([])
  const [token , settoken]=useState("")
  const [delstatus , setdelstatus]=useState("")
  
  const getcartbooks = async()=>{
   
    if(token){
      console.log(token);

      
      const header = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      console.log(token);
      console.log(header);
      
      
       
       
       
      const result = await getcartapi(header)
      console.log(result.data);
      setcartbook(result.data.books)
     }
    
    
   
  }
  useEffect(()=>{
    getcartbooks()
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }

  },[token,delstatus])

  return (
    <>
    <Header/>
    <h1 className='text-center text-4xl font-bold my-4 '>CART</h1>
    {cartbook?.length>0 ?

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5 p-5">
     {cartbook?.map((book) => (
    <BookCart key={book._id} book={book} setdelstatus={setdelstatus} />  
   ))}
   </div>
   
    :
  
    <h2 className='text-center text-2xl text-red-900 font-bold mb-4 '>Empty Cart...</h2>
    
     }
    <Footer />
    </>
  )
}

export default Cart