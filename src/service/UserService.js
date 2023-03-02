import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetUser = ()=>{
    return axios.get(API_BASE_URL+'/api/Users/GetAllUsers')
}
// const GetMediaById = (id)=>{
//     return axios.get(API_BASE_URL+`/api/MultimediaTypes/GetMultimediaType/${id}`)
// }
const Update_User = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/Users/UpdateUser/${id}`,data)
}
const DeleteUser = (id)=>{
    
    return axios.delete(API_BASE_URL+`/api/Users/DeleteUser/${id}`)
}
export {GetUser,Update_User,DeleteUser}