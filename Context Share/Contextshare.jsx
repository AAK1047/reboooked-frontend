import React, { createContext, useState ,useEffect} from 'react'


export const loginresponsecontext=createContext({})



function Contextshare({children}) {
    
    const[loginresponse , setloginresponse]=useState(false)
    const[role,setrole]=useState()

    useEffect(()=>{
     if(sessionStorage.getItem('token')){
      setloginresponse(true)
      setrole(JSON.parse(sessionStorage.getItem('existinguser')).role)
     }
     else{
      setloginresponse(false)

     }
     
    },[])
  return (
    <>
      
       <loginresponsecontext.Provider value={{loginresponse,setloginresponse,role,setrole}}>
  
          {children}
          
       </loginresponsecontext.Provider>
        
    </>
  )
}

export default Contextshare