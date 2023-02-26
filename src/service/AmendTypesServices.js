import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetAmendTypes = ()=>{
    return axios.get(API_BASE_URL+'/api/AmendTypes/GetAmendTypes')
}
const GetAmendTypeById = (id)=>{
    return axios.get(API_BASE_URL+`/api/AmendTypes/GetAmendType/${id}`)
}
const GetAmendTypDD = ()=>{
    return axios.get(API_BASE_URL+'/api/AmendTypes/GetActiveAmendTypesForDD')
}
// const Create_AmendType = (data)=>{
//     return axios.post(API_BASE_URL+'/api/AmendTypes/CreateAmendType',data)
// }
// const Update_AmendType = (data,id)=>{
//     return axios.put(API_BASE_URL+`/api/AmendTypes/UpdateAmendType/${id}`,data)
// }
// const DeleteAmendType = (id)=>{
//     return axios.delete(API_BASE_URL+`/api/AmendTypes/DeleteAmendType/${id}`)
// }
export {GetAmendTypes,GetAmendTypeById,GetAmendTypDD}