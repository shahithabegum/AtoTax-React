import axios from "axios";
import { API_BASE_URL } from "../../config/index";


  const  login=(data)=>{
        return axios.post(API_BASE_URL+'/api/Users/login',data)
  }
    const register=(data)=>{
        return axios.post(API_BASE_URL+'/api/Users/register',data)
    }

    const forgotpassword=(data)=>{
      return axios.post(API_BASE_URL+'/api/Users/forgotPassword',data)
  }
  const resetpassword=(data)=>{
    return axios.post(API_BASE_URL+'/api/Users/ResetPassword',data)
}
const changepassword=(data)=>{
  return axios.post(API_BASE_URL+'/api/Users/ChangePassword',data)
}
const confirmEmail=(data)=>{
  return axios.post(API_BASE_URL+'/api/Users/ConfirmEmail',data)
}
export {login,register,forgotpassword,resetpassword,confirmEmail,changepassword}