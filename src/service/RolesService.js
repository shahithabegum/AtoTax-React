import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetRoles = ()=>{
    return axios.get(API_BASE_URL+'/api/Users/GetAllRoles')
}
const GetUserRoles = (id)=>{
    return axios.get(API_BASE_URL+`/api/Users/GetRolesforUser?${id}`)
}
const Assign_Role = (data)=>{
    return axios.post(API_BASE_URL+'/api/Users/AssignRoles',data)
}
export {GetRoles,GetUserRoles,Assign_Role}