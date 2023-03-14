import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetReturnFrequency = ()=>{
    return axios.get(API_BASE_URL+'/api/ReturnFrequencyType/GetReturnFrequencyTypes')
}
const GetReturnFrequencyDD = ()=>{
    return axios.get(API_BASE_URL+'/api/ReturnFrequencyType/GetActiveServiceCategoriesForDD')
}
const GetReturnFrequencyById = (id)=>{
    return axios.get(API_BASE_URL+`/api/ReturnFrequencyType/GetReturnFrequencyType/${id}`)
}
export {GetReturnFrequency,GetReturnFrequencyDD,GetReturnFrequencyById}