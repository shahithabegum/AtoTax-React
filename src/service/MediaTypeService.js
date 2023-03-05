import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetMedia = ()=>{
    return axios.get(API_BASE_URL+'/api/MultimediaTypes/GetMultimediaTypes')
}
const GetMediaById = (id)=>{
    return axios.get(API_BASE_URL+`/api/MultimediaTypes/GetMultimediaType/${id}`)
}
const GetMediaDD = ()=>{
    return axios.get(API_BASE_URL+'/api/MultimediaTypes/GetActiveMultimediaTypesForDD')
}
const Create_Media = (data)=>{
    return axios.post(API_BASE_URL+'/api/MultimediaTypes/CreateMultimediaType',data)
}
const Update_Media = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/MultimediaTypes/UpdateMultimediaType/${id}`,data)
}
const DeletMedia = (id)=>{
    return axios.delete(API_BASE_URL+`/api/MultimediaTypes/DeleteMultimediaType/${id}`)
}
export {GetMedia,GetMediaById,Create_Media,Update_Media,DeletMedia,GetMediaDD}