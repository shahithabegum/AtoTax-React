import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetUsers = ()=>{
    return axios.get(API_BASE_URL+'/api/Users/GetAllRoles')
}
export {GetUsers}