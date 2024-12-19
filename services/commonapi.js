import axios from "axios"


export const commonApi=async (httpreq ,url, reqbody, reqheader)=>{
    const reqconfig = {
        method : httpreq ,
        url,
        data : reqbody ,
        headers:reqheader?reqheader:{"Content-Type":"application/json"}

    }

   return await axios(reqconfig).then((result)=>{
    return result
   }).catch((err)=>{
       return err
    })
}