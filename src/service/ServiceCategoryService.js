import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetServiceCategory = ()=>{
    return axios.get(API_BASE_URL+'/api/ServiceCategory/GetServiceCategories')
}
const GetServiceCategorysById = (id)=>{
    return axios.get(API_BASE_URL+`api/ServiceCategory/GetServiceCategory/${id}`)
}
const GetServiceCategoryDD = ()=>{
    return axios.get(API_BASE_URL+'/api/ServiceCategory/GetActiveServiceCategoriesForDD')
}
const Create_ServiceCategory = (data)=>{
    return axios.post(API_BASE_URL+'/api/ServiceCategory/CreateServiceCategory',data)
}
const Update_ServiceCategory = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/ServiceCategory/UpdateServiceCategory/${id}`,data)
}
const DeleteServiceCategory = (id)=>{
    return axios.delete(API_BASE_URL+`/api/ServiceCategory/DeleteServiceCategory/${id}`)
}
export {GetServiceCategory,GetServiceCategorysById,Create_ServiceCategory,Update_ServiceCategory,DeleteServiceCategory,GetServiceCategoryDD}