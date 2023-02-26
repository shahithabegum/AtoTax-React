import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetAddressType = ()=>{
    return axios.get(API_BASE_URL+'/api/AddressTypes/GetAddressTypes')
}
const GetAddressTypeById = (id)=>{
    return axios.get(API_BASE_URL+`/api/AddressTypes/GetAddressType/${id}`)
}
const GetAddressTypeDD = ()=>{
    return axios.get(API_BASE_URL+`/api/AddressTypes/GetActiveAddressTypesForDD/`)
}
const Create_AddressType = (data)=>{
    return axios.post(API_BASE_URL+'/api/AddressTypes/CreateAddressType',data)
}
const Update_AddressType = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/AddressTypes/UpdateAddressType/${id}`,data)
}
const Delete_AddressType = (id)=>{
    return axios.delete(API_BASE_URL+`/api/AddressTypes/DeleteAddressType/${id}`)
}
export {GetAddressType,GetAddressTypeById,Create_AddressType,Update_AddressType,Delete_AddressType,GetAddressTypeDD}