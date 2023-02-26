import axios from "axios";
import { API_BASE_URL } from "../config/index";
const GetStatus = ()=>{
    return axios.get(API_BASE_URL+'/api/Status/GetStatus')
}
const GetStatusById = (id)=>{
    return axios.get(API_BASE_URL+`/api/Status/GetStatus/${id}`)
}
const Create_Status = (data)=>{
    return axios.post(API_BASE_URL+'/api/Status/CreateStatus',data)
}
//WeatherForecast
const GetWeather = ()=>{
    return axios.get(API_BASE_URL+'/WeatherForecast')
}
export{GetStatus,GetStatusById,Create_Status,GetWeather}