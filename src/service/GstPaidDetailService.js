import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetPaidDetails = ()=>{
    return axios.get(API_BASE_URL+'/api/GSTPaidDetails/GetGSTPaidDetails')
}
const GetPaidDetailsById = (id)=>{
    return axios.get(API_BASE_URL+`/api/GSTPaidDetails/GetGSTPaidDetail/${id}`)
}
const Create_PaidDetails = (data)=>{
    return axios.post(API_BASE_URL+'/api/GSTPaidDetails/CreateGSTPaidDetail',data)
}
const Update_PaidDetails = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/GSTPaidDetails/UpdateGSTPaidDetail/${id}`,data)
}
const DeletPaidDetails = (id)=>{
    return axios.delete(API_BASE_URL+`/api/GSTPaidDetails/DeleteGSTPaidDetail/${id}`)
}
export {GetPaidDetails,GetPaidDetailsById,Create_PaidDetails,Update_PaidDetails,DeletPaidDetails}