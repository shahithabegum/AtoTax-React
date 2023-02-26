import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetGstClientAddress = ()=>{
    return axios.get(API_BASE_URL+'/api/GSTClientAddressExtensions/GetGSTClientAddressExtension')
}
const GetGstClientAddressById = (id)=>{
    return axios.get(API_BASE_URL+`/api/GSTClientAddressExtensions/GetGSTClientAddressExtension/${id}`)
}
const Create_GstClientAddress = (data)=>{
    return axios.post(API_BASE_URL+'/api/GSTClientAddressExtensions/CreateGSTClientAddressExtension',data)
}
const Update_GstClientAddress = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/GSTClientAddressExtensions/UpdateGSTClientAddressExtension/${id}`,data)
}
const DeleteGstClientAddress = (id)=>{
    return axios.delete(API_BASE_URL+`/api/GSTClientAddressExtensions/DeleteGSTClientAddressExtension/${id}`)
}
export {GetGstClientAddress,GetGstClientAddressById,Create_GstClientAddress,Update_GstClientAddress,DeleteGstClientAddress}