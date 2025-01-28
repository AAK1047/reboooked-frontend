import { commonApi } from "./commonapi"
import { serverUrl } from "./serverURL"

//register
export const registerapi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqbody,'')
}

//login
export const loginapi= async (reqbody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqbody,'')
}

//sellbook
export const sellbookapi= async (reqbody , reqheader)=>{
    return await commonApi('POST',`${serverUrl}/sellbook`,reqbody,reqheader)
}

//homebooks
export const homebooksapi= async ()=>{
    return await commonApi('GET',`${serverUrl}/home-books`)
}

//all books
export const allbooksapi= async (searchkey)=>{
    return await commonApi('GET',`${serverUrl}/all-books?search=${searchkey}`)
}

//all user
export const alluserapi= async (searchkey)=>{
    return await commonApi('GET',`${serverUrl}/users?search=${searchkey}`)
}

//aprove books
export const approvebooksapi= async (id)=>{
    return await commonApi('PUT',`${serverUrl}/approve-book/${id}`)
}

//remove books
export const removebooksapi= async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/remove-book/${id}`)
}


//reject books
export const rejectbooksapi= async (id)=>{
    return await commonApi('PUT',`${serverUrl}/reject-book/${id}`)
}

//get-sell-order
export const sellorderapi= async (reqheader)=>{
    return await commonApi('GET',`${serverUrl}/get-sell-order`,{},reqheader)
}

//admin-all-books
export const adminallbooksapi= async ()=>{
    return await commonApi('GET',`${serverUrl}/admin-all-books`)
}

//fiction books
export const fictionbooksapi= async (searchkey)=>{
    return await commonApi('GET',`${serverUrl}/fiction-books?search=${searchkey}`)
}

//non-fiction books
export const nonfictionbooksapi= async (searchkey)=>{
    return await commonApi('GET',`${serverUrl}/non-fiction-books?search=${searchkey}`)
}

//text books
export const textbooksapi= async (searchkey)=>{
    return await commonApi('GET',`${serverUrl}/text-books?search=${searchkey}`)
}

//add to cart
export const addtocartapi= async (id,reqheader)=>{
    return await commonApi('POST',`${serverUrl}/add-cart/${id}`,{},reqheader)
}

//get cart
export const getcartapi= async (reqheader)=>{
    return await commonApi('GET',`${serverUrl}/get-cart`,{},reqheader)
}

//remove cart

export const removecartapi= async (id,reqheader)=>{
    return await commonApi('POST',`${serverUrl}/remove-cart/${id}`,{},reqheader)
}




