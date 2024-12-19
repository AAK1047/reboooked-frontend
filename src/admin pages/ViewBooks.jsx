import React, { useEffect, useState } from 'react'
import AdminBookCard from '../components/AdminBookCard'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import { adminallbooksapi } from '../../services/allapi'

const ViewBooks = () => {
    
  const [allbook , setallbook]=useState([])

  const getallbooks = async ()=>{
   const result = await adminallbooksapi()
   console.log(result.data);
   
   setallbook(result.data)
  }

 useEffect(()=>{
   getallbooks()

 },[])
  return (
    <>
   <AdminHeader/>

    <div className="grid m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     { allbook?.length>0?
        allbook?.map((book) => (
       <AdminBookCard key={book._id} book={book} getallbooks={getallbooks} />  
    ))
    :
    <h2 className='text-center text-2xl text-red-900 font-bold mb-4'>No books to be approved...</h2>
    

    }
        </div>

    <AdminFooter/>
    </>
  )
}

export default ViewBooks