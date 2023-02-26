import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetServiceHistory = ()=>{
    return axios.get(API_BASE_URL+'/api/ServiceChargeUpdateHistory/GetServiceChargeUpdateHistory')
}
const GetServiceHistoryById = (id)=>{
    return axios.get(API_BASE_URL+`api/ServiceChargeUpdateHistory/GetServiceChargeUpdateHistory/${id}`)
}
const Create_ServiceHistory= (data)=>{
    return axios.post(API_BASE_URL+'/api/ServiceChargeUpdateHistory/CreateServiceChargeUpdateHistory',data)
}
const Update_ServiceHistory= (data,id)=>{
    return axios.put(API_BASE_URL+`/api/ServiceChargeUpdateHistory/UpdateServiceChargeUpdateHistory/${id}`,data)
}
const DeleteServiceHistory= (id)=>{
    return axios.delete(API_BASE_URL+`/api/ServiceChargeUpdateHistory/DeleteServiceChargeUpdateHistory/${id}`)
}
export {GetServiceHistory,GetServiceHistoryById,Update_ServiceHistory,Create_ServiceHistory,DeleteServiceHistory}