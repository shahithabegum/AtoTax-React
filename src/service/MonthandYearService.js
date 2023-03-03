import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetMonth = ()=>{
    return axios.get(API_BASE_URL+'/api/MonthYear/GetMonths')
}
const GetYear = ()=>{
    return axios.get(API_BASE_URL+'/api/MonthYear/GetYears')
}
export {GetMonth,GetYear}