import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetGstFilingType = ()=>{
    return axios.get(API_BASE_URL+'/api/GSTFilingTypes/GetGSTFilingTypes')
}
const GetGstFilingTypesById = (id)=>{
    return axios.get(API_BASE_URL+`/api/GSTFilingTypes/GetGSTFilingType/${id}`)
}
const Create_GstFilingType = (data)=>{
    return axios.post(API_BASE_URL+'/api/GSTFilingTypes/CreateGSTFilingType',data)
}
const Update_GstFilingType = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/GSTFilingTypes/UpdateGSTFilingTypes/${id}`,data)
}
const DeleteGstFilingType = (id)=>{
    return axios.delete(API_BASE_URL+`/api/GSTFilingTypes/DeleteGSTFilingTypes/${id}`)
}
export {GetGstFilingType,GetGstFilingTypesById,Create_GstFilingType,Update_GstFilingType,DeleteGstFilingType}