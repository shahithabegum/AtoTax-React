import axios from "axios";
import { API_BASE_URL } from "../../config/index";


  const  login=(data)=>{
        return axios.post(API_BASE_URL+'/api/UsersAuth/login',data)
  }
    const register=(data)=>{
        return axios.post(API_BASE_URL+'/api/UsersAuth/register',data)
    }

export {login,register}